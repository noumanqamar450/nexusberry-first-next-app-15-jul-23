import { NextResponse } from 'next/server'

export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    let users = [
        {
            userId: 1,
            name: 'Joe Haddad',
            image:'https://next-blog-starter.vercel.app/assets/blog/authors/joe.jpeg'
        },
        {
            userId: 2,
            name: 'Tim Neutkens',
            image:'https://next-blog-starter.vercel.app/assets/blog/authors/tim.jpeg'
        }
    ]

    if (id) {
        users = users.find(u => u.userId == id);
    }



    return NextResponse.json({ users })
}