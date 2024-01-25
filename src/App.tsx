import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from './routes/post/post'
import Layout from './routes/layout/layout'
import Home from './routes/home/home'
import PostError from './routes/post/post-error'
import Error from './routes/error/error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: '/posts/:postId',
          element: <Post />,
          errorElement: <PostError />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
