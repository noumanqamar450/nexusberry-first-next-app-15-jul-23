import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import parse from 'html-react-parser';

export default async function PostCard(props) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    let { id, title, image, createdAt, updatedAt, category, author, content, comment } = props.postData;

    // category string convert to array
    category = category.split(',');

    //Set Date for blog
    let date = updatedAt > createdAt ? Date(updatedAt) : Date(createdAt);

    return (
        <Link href={`/post/${id}`}>
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
                    <p className='text-lg pt-4'>{date.slice(0,15)}</p>
                    <p className='text-lg pt-4 flex gap-2 items-center'><FaRegComment /> ({comment.length})</p>
                </div>

                {/* title */}
                <h1 className='group-hover:underline text-2xl font-semibold pt-4'>{title}</h1>

                {/* Content */}
                <div className='truncate text-lg pt-4'>{parse(content?.slice(0, 80))}</div>

                {/* Categories */}
                <span className='absolute top-8 right-8 flex'>
                    {
                        category.map((c, i) => (
                            <div className='text-white ml-1 px-2 text-sm xl:text-base xl:ml-2 xl:px-3 py-1 font-semibold rounded bg-green-500 text-md' key={i}>    
                                {c}
                            </div>
                        ))
                    }
                </span>

                {/* Post Author */}
                <div className='flex gap-4 items-center mt-4'>

                    {/* Author's Image */}
                    <Image
                        src={author.image}
                        alt={author.name}
                        width={100}
                        height={100}
                        className='w-[60px] rounded-full'
                    />

                    {/* Author's Name */}
                    <h3 className='text-lg font-semibold'>{author.name}</h3>
                </div>
            </div>
        </Link>
    )
}


