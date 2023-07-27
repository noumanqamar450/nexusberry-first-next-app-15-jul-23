import AllPost from './components/AllPost';

async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}api/post`,{
    cache: 'no-store',
    method:'GET'
  });

  const post = await res.json();

  return post.data;
}

export default async function Home() {
  const post = await getPost();
  
  return (
    
    <div className='container mx-auto p-5'>
      <div className='py-12 flex justify-center items-center flex-wrap gap-10 md:justify-between'>
        <h1 className='text-7xl font-bold'>Blog.</h1>
        <p className='align-middle text-center'>A dynamically generated blog example using Next.js and Markdown.</p>
      </div>
      <main className='grid gap-4 grid-cols-1 mb-[80px] md:grid-cols-2 lg:grid-cols-3'>
        <AllPost post={post}/>
      </main>
    </div>
  )
}
