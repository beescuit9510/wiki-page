import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import usePost from '../../hooks/queries/usePost'
import EditPost from '../common/edit-post'
import parse from 'html-react-parser'

export default function PostDetail() {
  const { postId } = useParams()
  const { data } = usePost(postId!)

  return (
    <>
      <Flex justifyContent={'space-between'}>
        <Heading>{data.title}</Heading>
        <EditPost id={data.id} title={data.title} content={data.content} />
      </Flex>
      <Divider />
      <Text>{parse(data.dislpayContent)}</Text>
    </>
  )
}
