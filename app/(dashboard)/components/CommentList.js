'use client'
import React, { useState } from 'react'
import { CiRead, CiTrash } from 'react-icons/ci'
import Modal from './Modal'
import { toast } from 'react-toastify';

export default function CommentList({ com, refresh }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false)

    // Delete Comment record
    const ListDelete = async (id) => {
        const con = confirm('Are you sure?');
        if(con) {
            const deleteLoading = toast.loading("Please wait...")
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/comment?id=${id}`, {
                method: 'DELETE'
            });
            toast.update(deleteLoading, { render: "Comment successfully deleted", type: "success", isLoading: false, autoClose: 3000, });
            refresh();
        }
    }


    return (
        <>
            <tr className='group hover:bg-slate-50 border-b border-slate-100'>
                <td className='p-3 capitalize text-sm'>
                    {com.id}
                </td>
                <td className='p-3 capitalize text-sm'>
                    {com.name}
                </td>
                <td className='p-3 text-sm'>
                    {com.email
                    }
                </td>
                <td className='p-3 text-sm'>
                    {com.comment.slice(0, 25)}...
                </td>
                <td className='p-3 capitalize text-sm'>
                    {Date(com.createdAt).slice(0, 24)}
                </td>
                <td className='p-3 capitalize text-sm flex gap-3'>
                    <button title='View' className='p-1 bg-slate-600 rounded hover:bg-slate-500 transition text-white text-base' onClick={()=> setShowModal(true)}>
                        <CiRead />
                    </button>
                    <button title="Delete" className='p-1 bg-red-600 rounded hover:bg-red-500 transition text-white text-base' onClick={() => ListDelete(com.id)}>
                        <CiTrash />
                    </button>
                </td>
            </tr>

            <Modal isVisible={showModal} heading="Comment" onClose={handleClose}>
                <p className='flex justify-between gap-4'><strong>Name:</strong> {com.name}</p>
                <p className='flex justify-between gap-4'><strong>Email:</strong> {com.email}</p>
                <p className='flex justify-between gap-4'><strong>Comment:</strong> {com.comment}</p>
                <p className='flex justify-between gap-4'><strong>Post ref:</strong> {com.post.title}</p>
                <p className='flex justify-between gap-4'><strong>Date:</strong> {Date(com.createdAt).slice(0, 24)}</p>
            </Modal>
        </>
    )
}
