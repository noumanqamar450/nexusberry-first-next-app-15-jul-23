import React from 'react'

export default function Loading() {
  return (
    <div className='my-5'>
        <div className='w-[50%] h-[40px] bg-slate-200'></div>
        <div className='flex gap-5 items-center mt-8'>
            <div className='w-[60px] h-[60px] bg-slate-200 rounded-full'></div>
            <div className='w-[150px] h-[20px] bg-slate-200'></div>
        </div>
        <div className='w-full h-[500px] bg-slate-200 mt-8'></div>
        <div className='w-full h-[20px] bg-slate-200 mt-8'></div>
        <div className='w-full h-[20px] bg-slate-200 mt-5'></div>
        <div className='w-full h-[20px] bg-slate-200 mt-5'></div>
        <div className='w-[50%] h-[20px] bg-slate-200 mt-5'></div>
    </div>
  )
}
