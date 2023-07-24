import Link from 'next/link'
import React from 'react'
import { AiOutlineComment, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBookContent } from "react-icons/bi";

export default function DashboardHeader() {
  return (
    <div className='p-4 bg-slate-600 h-screen'>
    <ul className='w-full'>
      <li>
          <a 
            href="/"
            className='px-1 py-3 md:px-3  my-3 text-white hover:opacity-70 cursor-pointer transition-all flex gap-2 items-center text-base hover:border-r-4 hover:border-cyan-500'
            >
            <AiOutlineHome className='text-lg md:text-base' />
            <span className='hidden lg:block'>Go to home page</span>
          </a>
      </li>
      <li>
        <Link 
            href="/dashboard/users"
            className='px-1 py-3 md:px-3 my-3 text-white hover:opacity-70 cursor-pointer transition-all flex gap-2 items-center text-base hover:border-r-4 hover:border-cyan-500'
          >
          <AiOutlineUser className='text-lg md:text-base' />
          <span className='hidden lg:block'>Users</span>
        </Link>
      </li>
      <li>
        <Link 
            href="/dashboard/posts"
            className='px-1 py-3 md:px-3 my-3 text-white hover:opacity-70 cursor-pointer transition-all flex gap-2 items-center text-base hover:border-r-4 hover:border-cyan-500'
          >
          <BiBookContent className='text-lg md:text-base'/>
          <span className='hidden lg:block'>Posts</span>
        </Link>
      </li>
      <li>
        <Link 
            href="/dashboard/comments"
            className='px-1 py-3 md:px-3 my-3 text-white hover:opacity-70 cursor-pointer transition-all flex gap-2 items-center text-base hover:border-r-4 hover:border-cyan-500'
          >
          <AiOutlineComment className='text-lg md:text-base' />
          <span className='hidden lg:block'>Comments</span>
        </Link>
      </li>
    </ul>
    </div>
  )
}
