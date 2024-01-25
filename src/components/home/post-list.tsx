import { Button, Center, Divider, Flex, Stack } from '@chakra-ui/react'
import usePosts from '../../hooks/queries/usePosts'
import { useState } from 'react'
import CreatePost from '../common/create-post'
import StylableLink from '../common/stylable-link'

function PostLink({ id, title }: { id: string; title: string }) {
  return (
    <>
      <StylableLink key={id} to={`/posts/${id}`} fontSize={'2xl'}>
        {title}
      </StylableLink>
      <Divider />
    </>
  )
}

export default function PostList() {
  const [page, setPage] = useState(1)
  const { data } = usePosts(page)

  return (
    <Stack>
      <Flex justifyContent={'flex-end'}>
        <CreatePost />
      </Flex>

      {data.data.length === 0 && <Center>게시물이 없습니다.</Center>}

      {data.data.map((v) => (
        <PostLink key={v.id} id={v.id} title={v.title} />
      ))}

      <Center gap={'0.5rem'}>
        {data.prev !== null && (
          <Button onClick={() => setPage((old) => old - 1)}>Previous</Button>
        )}
        {data.next !== null && (
          <Button onClick={() => setPage((old) => old + 1)}>Next</Button>
        )}
      </Center>
    </Stack>
  )
}
