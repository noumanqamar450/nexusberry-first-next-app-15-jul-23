import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegComment } from "react-icons/fa6";

async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/user?id=${id}`);
    const data = await res.json();
    return data.users;
}


async function getComment(id) {
    const res = await fetch(`http://localhost:3000/api/comment?postId=${id}`);
    const data = await res.json();
    return data.comments;
}


export default async function PostCard(props) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const { title, slug, image, date, category, userId, content, postId } = props.postData;

    const user = await getUser(userId);

    const comment = await getComment(postId);

    return (
        <Link href={`/post/${slug}`}>
            <div className='group relative w-full p-4 border h-full'>

                {/* Feature Image */}
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={700}
                    className='w-full'
                />

                {/* Comments Count & post date */}
                <div className='flex justify-between items-center'>
                    <p className='text-lg pt-4'>{date}</p>
                    <p className='text-lg pt-4 flex gap-2 items-center'><FaRegComment /> ({comment.length})</p>
                </div>

                {/* title */}
                <h1 className='group-hover:underline text-2xl font-semibold pt-4'>{title}</h1>

                {/* Content */}
                <p className='text-lg pt-4'>{content?.slice(0, 80)}...</p>

                {/* Categories */}
                <span className='absolute top-8 right-8 flex'>
                    {
                        category.map((c, i) => (
                            <div className='ml-4 px-3 py-1 font-semibold rounded bg-green-500 text-md' key={i}>    
                                {c}
                            </div>
                        ))
                    }
                </span>

                {/* Post Author */}
                <div className='flex gap-4 items-center mt-4'>

                    {/* Author's Image */}
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={100}
                        height={100}
                        className='w-[60px] rounded-full'
                    />

                    {/* Author's Name */}
                    <h3 className='text-lg font-semibold'>{user.name}</h3>
                </div>
            </div>
        </Link>
    )
}


