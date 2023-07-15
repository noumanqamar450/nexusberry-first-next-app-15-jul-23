import CommentCard from "@/app/components/CommentCard";
import CommentForm from "@/app/components/CommentForm";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";


async function getPost(slug) {
    const res = await fetch(`http://localhost:3000/api/post?slug=${slug}`);
    const post = await res.json();
    return post.data;
}

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

export async function generateMetadata({ params }) {
    const post = await getPost(params.slug);
    return {
        title: post.title,
        description: post.content.slice(0, 100)
    }
}


export default async function Home({ params }) {

    const post = await getPost(params.slug);
    const user = await getUser(post.userId);
    const comment = await getComment(post.postId);

    return (
        <Suspense fallback={<Loading/>}>
            <div className="w-full">
                <h1 className="text-4xl font-bold my-10 md:text-6xl">{post.title}</h1>
                
                {/* Post Author */}
                <div className="flex items-center gap-4 mb-10">
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                </div>

                {/* Feature image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={500}
                    className="w-full"
                />

                <div className="max-w-[800px] mx-auto py-10">

                    {/* date */}
                    <p className="text-lg mb-5">{post.date}</p>

                    {/* Content */}
                    <p className="text-lg text-justify">{post.content}</p>

                    <hr className="my-10"/>

                    {/* comments */}
                    <h1 className="text-2xl font-semibold">Comments</h1>

                    {/* comment form */}
                    <CommentForm/>

                    {
                        comment.map(c => (
                            <CommentCard key={c.commentId} data={c}/>
                        ))
                    }
                </div>   
            </div>
        </Suspense>
    )
}
