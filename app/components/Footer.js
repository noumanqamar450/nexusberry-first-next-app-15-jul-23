import React from 'react'

export default function Footer() {
  return (
      <div className='bg-gray-100 w-full min-h-[250px] flex items-center border-t'>
        <div className="container mx-auto flex justify-center flex-wrap gap-10 items-center md:justify-between">
            <p className='text-3xl font-semibold text-center'>Dynamically Generated with Next.js.</p>
            <button className='transition duration-300 p-3 px-5 bg-black text-white hover:bg-gray-100 hover:text-black border hover:border-black'>Read Documentation</button>
        </div>
    </div>
  )
}
