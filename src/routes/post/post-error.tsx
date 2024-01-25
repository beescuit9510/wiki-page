import { Center, Heading, Stack } from '@chakra-ui/react'
import StylableLink from '../../components/common/stylable-link'

export default function PostError() {
  return (
    <Center>
      <Stack>
        <Heading>Post Page Error!</Heading>
        <StylableLink to={'/'}>main으로 돌아가기</StylableLink>
      </Stack>
    </Center>
  )
}
