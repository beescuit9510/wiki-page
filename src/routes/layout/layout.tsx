import { Container, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <Container>
      <Flex minHeight={'100vh'} direction={'column'} justifyContent={'center'}>
        <Outlet />
      </Flex>
    </Container>
  )
}
