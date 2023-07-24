'use client'
import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';

export default function CommentTable() {
    const [comment, setComment] = useState(null);

    // Get comment record
    async function getComment() {
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/comment`, {
            method: 'GET'
        });
        res = await res.json()
        setComment(res.data);
    }
    
    useEffect(() => {
        getComment();
    }, [])

    if (!comment)
        // loading
        return [1,2,3].map(l => (
            <tr key={l} className=' p-4border-b border-slate-50 w-full animate-pulse'>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
                <td className='p-3'><div className='bg-slate-200 w-20 h-5'></div></td>
            </tr>
        ));

    return comment.map((c) => <CommentList key={c.id} com={c} refresh={getComment}/>);
        
}
