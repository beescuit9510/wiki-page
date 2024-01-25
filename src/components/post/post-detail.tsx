import { Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import usePost from '../../hooks/queries/usePost'
import EditPost from '../common/edit-post'
import parse, { Element } from 'html-react-parser'
import StylableLink from '../common/stylable-link'

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

      <Text>
        {parse(data.dislpayContent, {
          replace(domNode) {
            if (domNode instanceof Element && domNode.name === 'a') {
              const { class: v } = domNode.attribs
              const splitAt = v.indexOf('-')
              const postId = v.slice(0, splitAt)
              const postTitle = v.slice(splitAt + 1)

              return (
                <StylableLink
                  to={`/posts/${postId}`}
                  textDecoration={'underline'}
                >
                  {postTitle}
                </StylableLink>
              )
            }
          },
        })}
      </Text>
    </>
  )
}
