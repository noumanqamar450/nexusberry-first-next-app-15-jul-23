import React from 'react'

export default function CommentForm() {
  return (
      <div className="p-5 my-4 border rounded-lg mb-5">
          <form>
              <input type="text" placeholder="Name" className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-4" />
              <input type="email" placeholder="email" className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-4" />
              <textarea placeholder='Comment' rows="5" className="w-full border border-slate-500 p-2 px-4 rounded focus:outline-slate-300 mb-5"></textarea>
              <button className="transition duration-300 rounded bg-slate-500 p-2 px-4 text-white hover:bg-slate-700">Add Comment</button>
          </form>
      </div>
  )
}
