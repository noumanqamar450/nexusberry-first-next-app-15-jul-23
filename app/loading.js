import React from 'react'

export default function Loading() {
  return (
    <>
      <div className='w-full py-12 flex justify-center flex-wrap gap-5 items-center md:justify-between'>
        <div className='w-[150px] h-[50px] bg-slate-200'></div>
        <div className='w-[300px] h-[20px] bg-slate-200'></div>
      </div>
      <div className='grid gap-4 grid-cols-1 mb-[80px] md:grid-cols-2 lg:grid-cols-3'>
        <div className='w-full p-5 border animate-pulse'>
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
        <div className='w-full p-5 border animate-pulse'>
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
        <div className='w-full p-5 border animate-pulse'>
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
      </div>
    </>
  )
}
