import { UseToastOptions, useToast } from '@chakra-ui/react'

export default function useShowToast() {
  const toast = useToast()

  const showToast = (options: UseToastOptions) =>
    toast({
      position: 'top',
      duration: 3000,
      isClosable: true,
      ...options,
    })

  return showToast
}
