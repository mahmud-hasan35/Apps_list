import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Componets/Home/Home.jsx'

const router = createBrowserRouter([
 {
  path:'/',
  Component: Root,
  children: [
    {index: true,
      Component: Home
    }
  ]
  
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
