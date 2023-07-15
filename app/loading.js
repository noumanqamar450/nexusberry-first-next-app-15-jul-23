import React from 'react'

export default function Loading() {
  return (
    <div className='w-full p-5 border'>
        <div className='h-[300px] bg-slate-200 w-full mb-4'></div>
        <div className='flex justify-between mb-4'>
            <div className='h-[20px] w-[100px] bg-slate-200'></div>
            <div className='h-[20px] w-[100px] bg-slate-200'></div>
        </div>
        <div className='h-[30px] w-full bg-slate-200 mb-4'></div>
        <div className='h-[20px] w-full bg-slate-200 mb-4'></div>
        <div className='h-[20px] w-80 bg-slate-200 mb-4'></div>
        <div className='flex gap-5 items-center'>
            <div className='h-[60px] w-[60px] bg-slate-200 rounded-full'></div>
            <div className='h-[20px] w-[100px] bg-slate-200'></div>
        </div>
    </div>
  )
}
