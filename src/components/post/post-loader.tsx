import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function PostLoader() {
  return (
    <Box>
      <Skeleton height='35px' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
  )
}
