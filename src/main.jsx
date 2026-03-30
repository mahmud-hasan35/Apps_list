import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Componets/Home/Home.jsx'
import Apps from './Componets/Apps/Apps.jsx';
import axios from 'axios';

const router = createBrowserRouter([
 {
  path:'/',
  Component: Root,
  children: [
    {index: true,
      Component: Home,
        loader: async () => {
        const res = await axios.get('/Apps.json')
         return res.data
      } 
    },
    {
      path: 'apps',
      Component: Apps,
      loader: async () => {
        const res = await axios.get('/Apps.json')
         return res.data
      } 
      
    },

  ]
  
 },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
