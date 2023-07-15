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
            <ul className='hidden sm:flex gap-5 content-center font-medium cursor-pointer'>
                <li className='transition hover:text-green-500'>Menu Link</li>
                <li className='transition hover:text-green-500'>Menu Link</li>
                <li className='transition hover:text-green-500'>Menu Link</li>
                <li className='transition hover:text-green-500'>Menu Link</li>
            </ul>
        </div>
    </header>
  )
}
