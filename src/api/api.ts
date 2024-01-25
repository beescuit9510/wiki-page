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
    .map((keyword) =>
      api
        .get(`/posts?title=${keyword}`, {
          params: {
            _sort: 'id',
          },
        })
        .then((res) => res.data)
    )

  const reses = await Promise.all(urls)

  return reses
    .flatMap((res) => res)
    .reduce(
      (p, v) =>
        p.replace(
          ` ${v.title} `,
          ` <a class='${v.id}-${v.title}' href='/posts/${v.id}' >${v.title}</a> `
        ),
      ` ${data} `
    )
    .trim()
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
    api.patch(`/posts/${data.id}`, {
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
