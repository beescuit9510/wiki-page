import { useSuspenseQuery } from '@tanstack/react-query'
import { PostKeys } from '../../utils/query-key'
import { request } from '../../api/api'

export default function usePost(id: string) {
  return useSuspenseQuery({
    queryKey: PostKeys.POST(id),

    queryFn: () => request.getPost(id).then((res) => res.data[0]),
  })
}
