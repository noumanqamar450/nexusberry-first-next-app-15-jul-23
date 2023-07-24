import React from 'react'

export default function Table({ children, heading }) {
  return (
      <table className="table-auto w-full rounded-lg overflow-hidden shadow-lg">
          <thead className='bg-slate-100 border-b border-slate-300'>
              <tr>
                {
                    heading?.map((h,i)=>(
                        <th className='p-3 capitalize text-sm text-left' key={i}>{h}</th>
                    ))   
                }
              </tr>
          </thead>
          <tbody>
              {children}
          </tbody>
      </table>
  )
}
