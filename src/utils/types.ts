export type PaginatedPosts = {
  first: number
  prev: number
  next: number
  last: number
  pages: number
  items: number
  data: Post[]
}

export type Post = {
  id: string
  title: string
  content: string
  dislpayContent: string
  createdAt: number
}

export type CreatePost = Omit<Post, 'id' | 'createdAt' | 'dislpayContent'>

export type EditPost = Omit<Post, 'createdAt' | 'dislpayContent'>
