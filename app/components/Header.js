import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full px-6 py-3 flex justify-between content-center border-b-2'>
        <div className="logo">
            <Link href='/'>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/en/0/02/DotBlog_domain_logo.png"
                    width={100}
                    height={50}
                    alt='Logo'
                />
            </Link>
        </div>
        <div className="menu self-center">
            <ul className='hidden sm:flex gap-5 items-center content-center font-medium cursor-pointer'>
                <li className='transition hover:text-green-500'>
                    <Link href="/">Home</Link>
                </li>
                <li className='transition hover:text-green-500'>About</li>
                <li className='transition hover:text-green-500'>Contact</li>
                <li className='transition bg-slate-500 text-white hover:bg-slate-600 rounded-md'>
                    <Link href="/dashboard" className='p-4 py-2 inline-block'>Dashboard</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}
