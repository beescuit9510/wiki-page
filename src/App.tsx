import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Post from './routes/post/post'
import Layout from './routes/layout/layout'
import Home from './routes/home/home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: '/posts/:postId',
          element: <Post />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
