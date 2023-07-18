import Header from '@/app/components/Header'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <div className='container mx-auto p-5'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
