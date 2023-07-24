import React from 'react'
import Table from '../../components/Table'
import Loading from './loading';
import UserTable from '../../components/UserTable';

export const metadata = {
  title:'Users'
}

export default async function Users() {
  
  return (
    <div className='p-5 w-full'>
        <h2 className='text-2xl md:text-3xl font-bold'>Users</h2>
        <div className='p-5 mt-10'>
            <Table heading={['ID', 'Avatar', 'Name', 'Email', 'Created At', 'Updated At', 'Action']}>
                  <UserTable/>
            </Table>
        </div>
    </div>
  )
}
