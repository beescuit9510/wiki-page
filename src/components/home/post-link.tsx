import { Divider, Link as StyledLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function PostLink({ id, title }: { id: string; title: string }) {
  return (
    <>
      <StyledLink fontSize={'2xl'} as={Link} to={`/posts/${id}`}>
        {title}
      </StyledLink>
      <Divider />
    </>
  )
}
