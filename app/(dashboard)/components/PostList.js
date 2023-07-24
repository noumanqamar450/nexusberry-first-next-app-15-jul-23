'use client'
import React, { useState } from 'react'
import { CiEdit, CiRead, CiTrash } from 'react-icons/ci'
import Modal from './Modal'
import { toast } from 'react-toastify';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'
import parse from 'html-react-parser';

export default function PostList({ post, refresh, user }) {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [featureImage, setFeatureImage] = useState({ url: post.image })
    const [content, setContent] = useState(post.content);
    const [postEdit, setPostEdit] = useState({ title: post.title, category: post.category, published: post.published, authorId: post.authorId });

    // Modal close function
    const handleClose = () => {
        setShowModal(false)
        setShowEditModal(false)
    }

    // Post Delete
    const ListDelete = async (id) => {
        const con = confirm('Are you sure?');
        if(con) {
            const deleteLoading = toast.loading("Please wait...");
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/post?id=${id}`, {
                method: 'DELETE'
            });
            toast.update(deleteLoading, { render: "Post successfully deleted", type: "success", isLoading: false, autoClose: 3000, });
            refresh();
        }
    }
    
    // Image Uploading using Cloudinary API
    const cloudinaryImageUploader = async (e) =>{
        e.preventDefault();
        const file = e.target.files[0];
        
        if (file) {
            
            let formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'next_feature');
            
            const imageUpload = toast.loading("Uploading image...");
            
            const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            }).then(r => r.json());
            
            if (data.url) {
                toast.update(imageUpload, { render: "Feature image successfully uploaded.", type: "success", isLoading: false, autoClose: 3000, });
                setFeatureImage({ url: data.url });
            } else {
                toast.update(imageUpload, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        }
    }
    
    // POst Update Handler Function
    const postUpdateHandler = async (e) => {
        e.preventDefault();

        const data = {
            ...postEdit,
            image: featureImage.url,
            content
        };

        if(data){
            const imageUpload = toast.loading("Updating record...");

            let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/post?id=${post.id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            });
            
            res = await res.json()
            
            if(res.data) {
                refresh();
                toast.update(imageUpload, { render: "Post record successfully update.", type: "success", isLoading: false, autoClose: 3000, });
            } else {
                toast.update(imageUpload, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        }
    }

    // change image function
    const changeImage = () => {
        setFeatureImage(null)
    }

    // Set user data in select flied
    const options = user.map(u => ({ value: u.id, label: u.name }))

    return (
        <>  
            <tr className='group hover:bg-slate-50 border-b border-slate-100'>
                <td className='p-2 capitalize text-sm'>
                    {post.id}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {post.title.slice(0, 25)}...
                </td>
                <td className='p-2 capitalize text-sm'>
                    {post.published ? 'Published' : 'Draft'}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {post.author.name}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {Date(post.createdAt).slice(0, 24)}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {Date(post.updatedAt).slice(0, 24)}
                </td>
                <td className='p-3 capitalize text-sm flex gap-3'>
                    <button title='View' className='p-1 bg-slate-600 rounded hover:bg-slate-500 transition text-white text-base' onClick={()=> setShowModal(true)}>
                        <CiRead />
                    </button>
                    <button title='Edit' className='p-1 bg-blue-600 rounded hover:bg-blue-500 transition text-white text-base' onClick={() => setShowEditModal(true)}>
                        <CiEdit />
                    </button>
                    <button title='Delete' className='p-1 bg-red-600 rounded hover:bg-red-500 transition text-white text-base' onClick={() => ListDelete(post.id)}>
                        <CiTrash />
                    </button>
                </td>
            </tr>
            
            {/* Post updating modal */}
            <Modal isVisible={showEditModal} heading={`Edit Post: ${post.title.slice(0,15)}...`} onClose={handleClose}>
                <form onSubmit={postUpdateHandler}>
                    <input 
                        className='w-full mb-4'
                        type="text" 
                        name="title" 
                        value={postEdit.title} 
                        placeholder='Title'
                        onChange={(e)=> {
                            setPostEdit({ ...postEdit, title: e.target.value });
                        }} 
                        required
                        />
                    <ReactQuill 
                        theme="snow" 
                        value={content} 
                        onChange={setContent} 
                        className='mb-4'/>
                    <Select 
                        options={options} 
                        isClearable="true"
                        isSearchable="true"
                        defaultValue={{ value: post.author.id, label: post.author.name }}
                        onChange={(choice) => setPostEdit({...postEdit, authorId: choice.value})}
                        className='mb-4'
                        />
                    <input
                        className='w-full mb-4'
                        type="text"
                        name="category"
                        value={postEdit.category}
                        placeholder='Category'
                        onChange={(e) => {
                            setPostEdit({ ...postEdit, category: e.target.value });
                        }}
                        required
                    />
                    <Select
                        options={[{ value: false, label: 'Draft' }, { value: true, label: 'Published' }]}
                        defaultValue={{ value: post.published, label: post.published ? 'Published' : 'Draft' }}
                        onChange={(choice) => setPostEdit({ ...postEdit, published: choice.value })}
                        className='mb-4'
                    />
                    {
                        !featureImage ? (
                            <div className='grid gap-2'>
                                <strong>Feature Image</strong>
                                <input type="file" name="image" onChange={cloudinaryImageUploader} />
                                <p className='text-slate-400 text-sm'>Image dimension: less then 1200 x 720</p>
                            </div>
                        ) : (
                            <>
                                <button className='mb-1 underline' onClick={changeImage}>Change Image</button>
                                <Image
                                    src={featureImage.url}
                                    alt='Feature Image'
                                    width={200}
                                    height={100}
                                />
                            </>
                        )
                    }
                    <button className='px-4 py-2 mt-5 bg-slate-600 text-white rounded-md text-lg'>Update</button>
                </form>
            </Modal>
            
            {/* Post view modal */}
            <Modal isVisible={showModal} heading="Post" onClose={handleClose}>
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={100}
                    className='rounded-md shadow-lg border-2 w-full transition group-hover:scale-105 mx-auto'
                />
                <h2 className='text-lg font-medium'>{post.title}</h2>
                <p>{parse(post.content)}</p>
                <p className='flex justify-between gap-4'><strong>Category:</strong> {post.category}</p>
                <p className='flex justify-between gap-4'><strong>Author:</strong> {post.author.name}</p>
                <p className='flex justify-between gap-4'><strong>Comments:</strong> {post.comment.length}</p>
                <p className='flex justify-between gap-4'><strong>Created Date:</strong> {Date(post.createdAt).slice(0, 24)}</p>
                <p className='flex justify-between gap-4'><strong>Updated Date:</strong> {Date(post.updatedAt).slice(0, 24)}</p>
            </Modal>
        </>
    )
}
