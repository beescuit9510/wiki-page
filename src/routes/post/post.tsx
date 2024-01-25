import { Stack } from '@chakra-ui/react'
import { Suspense } from 'react'
import PostDetail from '../../components/post/post-detail'
import PostLoader from '../../components/post/post-loader'

export default function Post() {
  return (
    <Stack>
      <Suspense fallback={<PostLoader />}>
        <PostDetail />
      </Suspense>
    </Stack>
  )
}
