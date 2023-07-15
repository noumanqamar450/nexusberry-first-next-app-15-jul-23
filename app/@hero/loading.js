import React from 'react'

export default function Loading() {
  return (
    <div className='w-full py-12 flex justify-center flex-wrap gap-5 items-center md:justify-between'>
        <div className='w-[150px] h-[50px] bg-slate-200'></div>
        <div className='w-[300px] h-[20px] bg-slate-200'></div>
    </div>
  )
}
