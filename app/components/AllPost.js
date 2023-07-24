import React, { Suspense } from 'react'
import PostCard from './PostCard'
import PostLoading from './PostLoading'

export default function AllPost({ post }) {
    return post.map(p => (
            <Suspense key={p.id} fallback={<PostLoading />}>
                <PostCard postData={p} />
            </Suspense>
        ))
}
