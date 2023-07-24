import React from 'react'
import '../globals.css'
import { Inter } from 'next/font/google'
import DashboardHeader from './components/DashboardHeader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className='flex w-[100%]'>
            <div className='w-1/5'>
              <DashboardHeader/>
            </div>
            <div className='w-4/5'>
              {children}
            </div>
            <ToastContainer
              position="bottom-center"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </body>
    </html>
  )
}
