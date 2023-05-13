import {
  createBrowserRouter
} from 'react-router-dom'
import Index from './pages/Index'
import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
  },
])
