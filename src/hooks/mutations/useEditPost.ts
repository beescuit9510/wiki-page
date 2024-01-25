import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../main'
import { EditPost, Post } from '../../utils/types'
import { request } from '../../api/api'
import { PostKeys } from '../../utils/query-key'

export default function useEditPost() {
  return useMutation({
    mutationFn: async (data: EditPost) => {
      return request.editPost(data).then((res) => res.data)
    },

    onSuccess: (data) => {
      queryClient.setQueryData<Post>(PostKeys.POST(data.id), () => {
        return { ...data }
      })
    },
  })
}
