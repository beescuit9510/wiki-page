import { Center, Flex, Heading, Stack } from '@chakra-ui/react'

export default function Error() {
  return (
    <Flex minHeight={'100vh'} direction={'column'} justifyContent={'center'}>
      <Center>
        <Stack>
          <Heading>Unexpected Application Error!</Heading>
        </Stack>
      </Center>
    </Flex>
  )
}
