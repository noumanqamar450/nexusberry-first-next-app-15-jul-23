
import Image from "next/image";
import parse from 'html-react-parser';
import CommentSection from "@/app/components/CommentSection";

// async function getPostAll() {
//     const res = await fetch(`${process.env.BASE_URL}api/post`);
//     const post = await res.json();
//     return post.data;
// }

async function getPost(id) {
    const res = await fetch(`${process.env.BASE_URL}api/post?id=${id}`,{
        cache: 'no-store',
        method: 'GET'
    });
    const post = await res.json();
    return post.data;
}

export async function generateMetadata({ params }) {
    const post = await getPost(params.id);

    return {
        title: post.title,
        description: post.content.slice(0, 100)
    }
}


export default async function Post({ params }) {

    const post = await getPost(params.id);

    //Set Date for blog
    let date = post.updatedAt > post.createdAt ? 'Updated: ' + Date(post.updatedAt).slice(0, 15) : 'Created: ' + Date(post.createdAt).slice(0, 15);

    return ( 
        <div className='container mx-auto p-5'>
            <div className="w-full">
                <h1 className="text-4xl font-bold my-10 md:text-6xl">{post.title}</h1>
                
                {/* Post Author */}
                <div className="flex items-center gap-4 mb-10">
                    <Image
                        src={post.author.image}
                        alt={post.author.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <h3 className="text-xl font-semibold">{post.author.name}</h3>
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

                    {/* Categories */}
                    <ul className="float-right flex gap-3 mb-5 list-disc list-inside">
                        {
                            post.category.split(',').map((c, i) => (
                                <li key={i}>{c}</li>
                            ))
                        }
                    </ul>

                    {/* date */}
                    <p className="text-lg mb-5">{date}</p>

                    {/* Content */}
                    <div className="text-lg text-justify">{parse(post.content)}</div>

                    <hr className="my-10"/>
                    
                    {/* Comment Section */}
                    <CommentSection postId={post.id}/>
                    
                </div>   
            </div>
        </div>
    )
}

// export async function generateStaticParams() {
//     const posts = await getPostAll();

//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }
