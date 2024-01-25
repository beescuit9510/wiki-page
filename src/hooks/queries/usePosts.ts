import { useSuspenseQuery } from '@tanstack/react-query'
import { PostKeys } from '../../utils/query-key'
import { request } from '../../api/api'

export default function usePosts(page: number) {
  return useSuspenseQuery({
    queryKey: PostKeys.POSTS(page),

    queryFn: async () => request.getPosts(page).then((res) => res.data),
  })
}
