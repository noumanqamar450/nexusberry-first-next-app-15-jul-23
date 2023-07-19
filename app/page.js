import { Suspense } from 'react';
import PostCard from './components/PostCard'
import Loading from './loading';
import LoadingForHero from './LoadingForHero';


async function getPost() {
  const res = await fetch(`http://localhost:3000/api/post`);
  const post = await res.json();
  return post.data;
}

export default async function Home() {
  const post = await getPost();
  return (
    <>
      <Suspense fallback={<LoadingForHero />}>
        <div className='py-12 flex justify-center items-center flex-wrap gap-10 md:justify-between'>
          <h1 className='text-7xl font-bold'>Blog.</h1>
          <p className='align-middle text-center'>A dynamically generated blog example using Next.js and Markdown.</p>
        </div>
      </Suspense>
      <main className='grid gap-4 grid-cols-1 mb-[80px] md:grid-cols-2 lg:grid-cols-3'>
        {
          post.map(p => (
            <Suspense key={p.postId} fallback={<Loading/>}>
              <PostCard postData={p}/>
            </Suspense>
          ))
        }
      </main>
    </>
  )
}
