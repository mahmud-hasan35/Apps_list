import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Componets/Home/Home.jsx'
import Apps from './Componets/Apps/Apps.jsx';
import axios from 'axios';
import AppDetails from './Componets/Apps/AppDetils.jsx';
import InstalledApps from './Componets/Installation/InstalledApps.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Componets/ErrorPage/ErrorPage.jsx';

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

    {
      path: 'detail/:id',
      Component: AppDetails,
       loader: async ({params}) => {
        const res = await axios.get('/Apps.json')
        const detail = res.data.find((app) => app.id === parseInt(params.id) );
         return detail
      } 

    },


    {
      
     path: "installed",
     Component: InstalledApps

    },

    {
    path: "*",
    Component:ErrorPage
   }
  ]
  
 },
 
 

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
