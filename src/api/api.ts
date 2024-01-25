import axios from 'axios'
import { CreatePost, EditPost, PaginatedPosts, Post } from '../utils/types'

const getUrls = async (data: string) => {
  const words = data.split(' ')

  const urls = Array(words.length)
    .fill(0)
    .map((v, idx) => {
      let keyword = ''
      return words
        .slice(v + idx)
        .map((surfix) => (keyword += ' ' + surfix).trim())
    })
    .flatMap((v) => v)
    .flatMap((keyword) =>
      api.get(`/posts?title=${keyword}`).then((res) => res.data)
    )

  const reses = await Promise.all(urls)
  return reses
    .flatMap((res) => res)
    .reduce(
      (p, v) =>
        p.replace(
          v.title,
          `<a style="text-decoration:underline;" href='/posts/${v.id}'>${v.title}<a>`
        ),
      data
    )
}

const api = axios.create({ baseURL: 'http://localhost:3000' })

export const request = {
  createPost: async (data: CreatePost) =>
    api.post('/posts', {
      ...data,
      dislpayContent: await getUrls(data.content),
      createdAt: Date.now(),
    }),

  editPost: async (data: EditPost) =>
    api.put(`/posts/${data.id}`, {
      ...data,
      dislpayContent: await getUrls(data.content),
    }),

  getPosts: async (page: number) =>
    api.get<PaginatedPosts>('/posts', {
      params: {
        _sort: '-createdAt',
        _page: page,
        _per_page: 5,
      },
    }),

  getPost: async (id: string) =>
    api.get<Post[]>('/posts', {
      params: {
        id,
      },
    }),
}
