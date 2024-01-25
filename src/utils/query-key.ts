export const PostKeys = {
  POSTS: (page: number) => ['posts', { page }] as const,
  POST: (id: string) => ['posts', id] as const,
}
