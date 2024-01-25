import { useMutation } from '@tanstack/react-query'
import { CreatePost } from '../../utils/types'
import { request } from '../../api/api'

export default function useCreatePost() {
  return useMutation({
    mutationFn: async (data: CreatePost) => {
      return request.createPost(data).then((res) => res.data)
    },
  })
}
