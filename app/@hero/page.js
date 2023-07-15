import React, { Suspense } from 'react'
import Loading from './loading'

export default function Hero() {
    return (
        <Suspense fallback={<Loading/>}>
            <div className='py-12 flex justify-center items-center flex-wrap gap-10 md:justify-between'>
                <h1 className='text-7xl font-bold'>Blog.</h1>
                <p className='align-middle text-center'>A dynamically generated blog example using Next.js and Markdown.</p>
            </div>
        </Suspense>
    )
}
