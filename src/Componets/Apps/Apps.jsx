import { useLoaderData, } from 'react-router'
import AllApps from './AllApps';
import { useState } from 'react';

export default function Apps() {

    const appsData = useLoaderData()

    const [product, setProduct] = useState("")


    const onClick = (e) => {
      setProduct(e.target.value)
        
    }

   const fillterApps = appsData.filter(app => {
    return app.title.toLowerCase().includes(product.toLowerCase())
   })
   
    
  return (
   <>
   
      <h2 className="text-5xl font-bold text-center mt-6">Our All Applications</h2>
      <p className="text-center text-2xl text-gray-500 mt-6 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>


<input 
  className='p-3 border border-amber-300 shadow-md shadow-amber-100 rounded-md mb-3.5 outline-none focus:ring-2 focus:ring-amber-300' 
  type="text" 
  placeholder='Search your product' 
  onChange={onClick}
/>     
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">



        {

          product == "" ? appsData.map(apps => (<AllApps key={apps.id} apps = {apps}></AllApps>)
                
            )  : fillterApps.length > 0 ? fillterApps.map(apps => (<AllApps key={apps.id} apps = {apps}></AllApps>)
                
            ) : ( <p className="text-center text-5xl font-bold p-12 col-span-full text-red-500">
      No apps found 😢
    </p>)
            
        }

      </div>
 
     
   </>
  )
}
