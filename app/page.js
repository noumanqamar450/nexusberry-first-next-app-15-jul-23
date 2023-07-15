import { Suspense } from 'react';
import PostCard from './components/PostCard'
import Loading from './loading';

async function getPost() {
  const res = await fetch(`http://localhost:3000/api/post`);
  const post = await res.json();
  return post.data;
}

export default async function Home() {
  const post = await getPost();
  return (
    <main className='grid gap-4 grid-cols-1 mb-[80px] md:grid-cols-2 lg:grid-cols-3'>
      {
        post.map(p => (
          <Suspense key={p.postId} fallback={<Loading/>}>
            <PostCard postData={p}/>
          </Suspense>
        ))
      }
    </main>
  )
}
