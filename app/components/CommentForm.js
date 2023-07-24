'use client'
import React, { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai';

export default function CommentForm({postId, refresh}) {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(false);

    // Add Comment function
    const formHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/comment`,{
            method: "POST",
            body: JSON.stringify({...comment, postId})
        })
        res = await res.json();
        console.log(res);
        if (res.data) {
            refresh();
            setComment({name:'', email:'', comment:''})
        } else {
            alert('Something wrong. Try again')
        }
        setLoading(false);
    
    }

  return (
      <div className="p-5 my-4 border rounded-lg mb-5">
          <form onSubmit={formHandler}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-4" 
                    required
                    value={comment.name}
                    onChange={(e)=> setComment({...comment, name: e.target.value})}
                    />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-4" 
                    required
                    value={comment.email}
                    onChange={(e) => setComment({ ...comment, email: e.target.value })}
                    />
                <textarea 
                    placeholder='Comment' 
                    rows="5"
                    required
                    value={comment.comment }
                    onChange={(e) => setComment({ ...comment, comment: e.target.value })}
                    className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-5">
                    </textarea>
                <button className="flex gap-2 items-center transition duration-300 rounded bg-slate-500 p-2 px-4 text-white hover:bg-slate-700" disabled={loading}>
                    {loading && <AiOutlineLoading className='animate-spin'/>}
                    Add Comment
                </button>
          </form>
      </div>
  )
}
