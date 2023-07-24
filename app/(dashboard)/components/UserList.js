'use client'
import React, { useState } from 'react'
import { CiEdit, CiRead, CiTrash } from 'react-icons/ci'
import Modal from './Modal'
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function UserList({ user, refresh }) {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [profileImage, setProfileImage] = useState(null)
    const [userEdit, setUserEdit ] = useState({ name: user?.name, password: '', image: user?.image });

    // Modal close function
    const handleClose = () => {
        setShowModal(false)
        setShowEditModal(false)
    }

    // User Delete
    const ListDelete = async (id) => {
        const con = confirm('Are you sure?');
        if(con) {
            const deleteLoading = toast.loading("Please wait...");
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/user?id=${id}`, {
                method: 'DELETE'
            });
            toast.update(deleteLoading, { render: "User successfully deleted", type: "success", isLoading: false, autoClose: 3000, });
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
            formData.append('upload_preset', 'next_profile');
            
            const imageUpload = toast.loading("Uploading image...");
            
            const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            }).then(r => r.json());
            
            if (data.url) {
                toast.update(imageUpload, { render: "Profile image successfully uploaded.", type: "success", isLoading: false, autoClose: 3000, });
                setProfileImage({ url: data.url });
            } else {
                toast.update(imageUpload, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        }
    }
    
    // User Update Handler Function
    const userUpdateHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: userEdit.name,
            password: userEdit.password ? userEdit.password : user.password,
            image: profileImage ? profileImage.url : userEdit.image
        }
        if(data){
            const imageUpload = toast.loading("Updating record...");

            let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/user?id=${user.id}`, {
                method: 'PUT',
                body: JSON.stringify(data)
            });
            
            res = await res.json()
            
            if(res.data) {
                refresh();
                setProfileImage(null)
                toast.update(imageUpload, { render: "User record successfully update.", type: "success", isLoading: false, autoClose: 3000, });
            } else {
                toast.update(imageUpload, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        }
    }

    // change image function
    const changeImage = () => {
        setProfileImage(null)
    }

    return (
        <>  
            <tr className='group hover:bg-slate-50 border-b border-slate-100'>
                <td className='p-2 capitalize text-sm'>
                    {user.id}
                </td>
                <td className='p-2 capitalize text-sm'>
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={60}
                        height={60}
                        className='rounded-full shadow-lg border-2 w-12 transition group-hover:scale-105'
                    />
                </td>
                <td className='p-2 capitalize text-sm'>
                    {user.name}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {user.email}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {Date(user.createdAt).slice(0, 24)}
                </td>
                <td className='p-2 capitalize text-sm'>
                    {Date(user.updatedAt).slice(0, 24)}
                </td>
                <td className='p-3 capitalize text-sm flex gap-3'>
                    <button title='View' className='p-1 bg-slate-600 rounded hover:bg-slate-500 transition text-white text-base' onClick={()=> setShowModal(true)}>
                        <CiRead />
                    </button>
                    <button title='Edit' className='p-1 bg-blue-600 rounded hover:bg-blue-500 transition text-white text-base' onClick={() => setShowEditModal(true)}>
                        <CiEdit />
                    </button>
                    <button title='Delete' className='p-1 bg-red-600 rounded hover:bg-red-500 transition text-white text-base' onClick={() => ListDelete(user.id)}>
                        <CiTrash />
                    </button>
                </td>
            </tr>
            
            {/* User updating modal */}
            <Modal isVisible={showEditModal} heading={`Edit User: ${user.name}`} onClose={handleClose}>
                <form onSubmit={userUpdateHandler}>
                    <input 
                        className='w-full mb-4'
                        type="text" 
                        name="name" 
                        value={userEdit.name} 
                        placeholder='Full Name'
                        onChange={(e)=> {
                            setUserEdit({ ...userEdit, name: e.target.value });
                        }} />
                    <input 
                        className='w-full mb-4'
                        type="text" 
                        name="password" 
                        value={userEdit.password} 
                        placeholder='Change password'
                        onChange={(e) => {
                            setUserEdit({ ...userEdit, password: e.target.value });
                        }} />
                    {
                        !profileImage ? (
                            <div className='grid gap-2'>
                                <strong>Profile Image</strong>
                                <input type="file" name="profileImage" onChange={cloudinaryImageUploader} />
                                <p className='text-slate-400 text-sm'>Image dimension: less then 200 x 200</p>
                            </div>
                        ) : (
                            <>
                                <button className='mb-1 underline' onClick={changeImage}>Change Image</button>
                                <Image
                                    src={profileImage.url}
                                    alt='Profile Image'
                                    width={100}
                                    height={100}
                                />
                            </>
                        )
                    }
                    <button className='px-4 py-2 mt-5 bg-slate-600 text-white rounded-md text-lg'>Update</button>
                </form>
            </Modal>
            
            {/* User view modal */}
            <Modal isVisible={showModal} heading="User" onClose={handleClose}>
                <Image
                    src={user.image}
                    alt={user.name}
                    width={100}
                    height={100}
                    className='rounded-md shadow-lg border-2 w-24 transition group-hover:scale-105 mx-auto'
                />
                <p className='flex justify-between gap-4'><strong>Name:</strong> {user.name}</p>
                <p className='flex justify-between gap-4'><strong>Email:</strong> {user.email}</p>
                <p className='flex justify-between gap-4'><strong>Total Post:</strong> {user.posts.length}</p>
                <p className='flex justify-between gap-4'><strong>Created Date:</strong> {Date(user.createdAt).slice(0, 24)}</p>
                <p className='flex justify-between gap-4'><strong>Updated Date:</strong> {Date(user.updatedAt).slice(0, 24)}</p>
            </Modal>
        </>
    )
}
