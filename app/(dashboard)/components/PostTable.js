'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import Image from 'next/image';
import { toast } from 'react-toastify';
import PostList from './PostList';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'

export default function PostTable() {
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [featureImage, setFeatureImage] = useState(null);
    const [newPost, setNewPost] = useState({})

    // Get all post record
    async function getPost() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/post/all`, {
            method: 'GET'
        });
        res = await res.json()
        setPost(res.data)
    }

    // Get all post record
    async function getUser() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/user`, {
            method: 'GET'
        });
        res = await res.json()
        setUser(res.data)
    }
    
    useEffect(() => { 
        getUser();
        getPost();
    }, [])

    // Modal close functions
    const modalHandler = () => {
        setShowModal(false)
    }

    // Image Uploading using Cloudinary API
    const cloudinaryImageUploader = async (e) => {
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
    
    // Add new Post
    const addNewPost = async (e) => {
        e.preventDefault();

        if (featureImage){
            const addNewPostLoading = toast.loading("Creating new post...");
            let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/post`, {
                method: 'POST',
                body: JSON.stringify({ ...newPost, image: featureImage.url, content })
            });

            res = await res.json();

            if (res.data) {
                getPost();
                toast.update(addNewPostLoading, { render: "New post successfully created.", type: "success", isLoading: false, autoClose: 3000, });
                setFeatureImage(null);
                setNewPost({});
                setContent('');
                setShowModal(false);
            } else {
                toast.update(addNewPostLoading, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        } else {
            alert("Add feature image.");
        }
    }

    // Set user data in select flied
    const options = user?.map(u => ({ value: u.id, label: u.name }))

    // change image function
    const changeImage = () => {
        setFeatureImage(null)
    }

    if (!post)
        // loading
        return [1,2,3].map(l => (
            <tr key={l} className=' p-4border-b border-slate-50 w-full animate-pulse'>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
            </tr>
        ));

    return (
        <>
            <tr>
                <td colSpan={7}>
                    <div title="Add New Post" onClick={() => setShowModal(true)} className='w-auto p-5 m-2 border border-dashed rounded-md flex justify-center cursor-pointer hover:border-slate-300'>
                        <AiOutlinePlus/>
                   </div>
                </td>
            </tr>
            {
                post.map((p) => <PostList key={p.id} post={p} user={user} refresh={getPost} />)
            }

            {/* Add new post modal */}
            <Modal isVisible={showModal} heading="Add New Post" onClose={modalHandler}>
                <form onSubmit={addNewPost}>
                    <input
                        className='w-full mb-4'
                        type="text"
                        name="title"
                        value={newPost.title}
                        placeholder='Title'
                        onChange={(e) => {
                            setNewPost({ ...newPost, title: e.target.value });
                        }}
                        required
                    />
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        className='mb-4 w-[600px]' />
                    <Select
                        options={options}
                        isClearable="true"
                        isSearchable="true"
                        onChange={(choice) => setNewPost({ ...newPost, authorId: choice.value })}
                        className='mb-4'
                    />
                    <input
                        className='w-full mb-1'
                        type="text"
                        name="category"
                        value={newPost.category}
                        placeholder='Category'
                        onChange={(e) => {
                            setNewPost({ ...newPost, category: e.target.value });
                        }}
                        required
                    />
                    <p className='mb-3 text-slate-400 text-sm'>with comma (,)</p>
                    <Select
                        options={[{ value: false, label: 'Draft' }, { value: true, label: 'Published' }]}
                        onChange={(choice) => setNewPost({ ...newPost, published: choice.value })}
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
                    <button className='px-4 py-2 mt-5 bg-slate-600 text-white rounded-md text-lg'>Add New</button>
                </form>
            </Modal>
        </>
    );
        
}
