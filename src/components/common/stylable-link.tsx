import { LinkProps, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function StylableLink({
  to,
  children,
  ...rest
}: { to: string; children: React.ReactNode } & LinkProps) {
  return (
    <ChakraLink as={Link} to={to} {...rest}>
      {children}
    </ChakraLink>
  )
}
