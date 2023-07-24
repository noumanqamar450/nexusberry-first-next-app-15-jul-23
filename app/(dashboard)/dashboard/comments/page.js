import React from 'react'
import Table from '../../components/Table'
import CommentTable from '../../components/CommentTable';

export const metadata = {
    title: 'Comments'
}

export default async function Comments() {

    return (
        <>
            <div className='p-5 w-full'>
                <h2 className='text-2xl md:text-3xl font-bold'>Comments</h2>
                <div className='p-5 mt-10'>
                    <Table heading={['ID', , 'Name', 'Email', 'Comment', 'Created At', 'Action']}>
                        <CommentTable/>
                    </Table>
                </div>
            </div>
        </>
    )
}
