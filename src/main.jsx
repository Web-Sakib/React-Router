import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About/About.jsx';
import Users from './Components/Users/Users.jsx';
import Posts from './Components/Posts/Posts.jsx';
import UserDetails from './Components/Users/UserDetails.jsx';
import Error from './Components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/users/:id',
        element: <UserDetails></UserDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
