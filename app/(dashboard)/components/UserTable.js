'use client'
import React, { useEffect, useState } from 'react'
import UserList from './UserList';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function UserTable() {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [newUser, setNewUser] = useState({})

    // Get all user record
    async function getUser() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/user`, {
            method: 'GET'
        });
        res = await res.json()
        setUser(res.data)
    }
    
    useEffect(() => { 
        getUser();
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
    
    // Add new user
    const addNewUser = async (e) => {
        e.preventDefault();
        
        if (profileImage){
            const addNewUserLoading = toast.loading("Creating new user...");
            let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/user`, {
                method: 'POST',
                body: JSON.stringify({ ...newUser, image: profileImage.url })
            });
    
            res = await res.json();
    
            if (res.data) {
                getUser();
                toast.update(addNewUserLoading, { render: "New user successfully created.", type: "success", isLoading: false, autoClose: 3000, });
                setProfileImage(null);
            } else {
                toast.update(addNewUserLoading, { render: "Something wrong. Try again", type: "error", isLoading: false, autoClose: 3000, });
            }
        } else {
            alert("Add profile image.");
        }
    }

    // change image function
    const changeImage = () => {
        setProfileImage(null)
    }

    if (!user)
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
                    <div title="Add New User" onClick={() => setShowModal(true)} className='w-auto p-5 m-2 border border-dashed rounded-md flex justify-center cursor-pointer hover:border-slate-300'>
                        <AiOutlinePlus/>
                   </div>
                </td>
            </tr>
            {
                user.map((u) => <UserList key={u.id} user={u} refresh={getUser} />)
            }

            {/* Add new user modal */}
            <Modal isVisible={showModal} heading="Add New User" onClose={modalHandler}>
                <form onSubmit={addNewUser}>
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Full Name'
                        className='w-full mb-4'
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        required/>
                    <input 
                        type="email" 
                        name='email'
                        placeholder='Email' 
                        className='w-full mb-4'
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required />
                    <input 
                        type="text" 
                        name='password' 
                        className='w-full mb-4'
                        placeholder='Password'
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        required />
                    {
                        !profileImage ? (
                            <div className='grid gap-2'>
                                <strong>Profile Image</strong>
                                <input type="file" name="image" onChange={cloudinaryImageUploader} />
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
                    <button
                        className='py-3 px-4 mt-4 rounded-md bg-slate-500 hover:bg-slate-600 text-white'>
                        Add New
                    </button>
                </form>
            </Modal>
        </>
    );
        
}
