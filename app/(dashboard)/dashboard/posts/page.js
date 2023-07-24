import React from 'react'
import Table from '../../components/Table'
import PostTable from '../../components/PostTable';

export const metadata = {
    title: 'Posts'
}

export default async function Posts() {

    return (
        <div className='p-5 w-full'>
            <h2 className='text-2xl md:text-3xl font-bold'>Post</h2>
            <div className='p-5 mt-10'>
                <Table heading={['ID', , 'Title', 'Status', 'Author', 'Created At', 'Updated At', 'Action']}>
                    <PostTable/>
                </Table>
            </div>
        </div>
    )
}
