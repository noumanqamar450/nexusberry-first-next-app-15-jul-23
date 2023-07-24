'use client'
import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

export default function CommentSection({postId}) {
    const [comment, setComment] = useState(null)

    // Get comments by postId
    const getComment = async (postId) => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/comment?postId=${postId}`, {
            method: "GET"
        });
        res = await res.json()
        setComment(res.data);
    }

    useEffect(()=>{
        getComment(postId);
    }, [postId])


    return (
        <>
            {/* comments */}
            <h1 className="text-2xl font-semibold">Comments ({comment?.length})</h1>
            
            {/* comment form */}
            <CommentForm postId={postId} refresh={()=> getComment(postId)}/>

            {/* Comment List */}
            {
                !comment && [1,2,3].map(l => (
                    <div key={l} className='w-full p-5 border-t'>
                        <div className='w-[100px] h-[24px] bg-slate-200 mb-3 animate-pulse'></div>
                        <div className='w-full h-[15px] bg-slate-200 mb-2 animate-pulse'></div>
                        <div className='w-full h-[15px] bg-slate-200 mb-2 animate-pulse'></div>
                        <div className='w-[50%] h-[15px] bg-slate-200 animate-pulse'></div>
                    </div>
                ))
            }
            {
                comment && comment.map(c => (
                    <CommentCard key={c.id} data={c} />
                ))
            }
        </>
    )
}
