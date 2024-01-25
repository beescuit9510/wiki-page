import { Suspense } from 'react'
import PostListLoader from '../../components/home/post-list-loader'
import PostList from '../../components/home/post-list'

export default function Home() {
  return (
    <Suspense fallback={<PostListLoader />}>
      <PostList />
    </Suspense>
  )
}
