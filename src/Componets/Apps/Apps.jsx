import React from 'react'
import { useLoaderData } from 'react-router'
import AllApps from './AllApps';

export default function Apps() {

    const appsData = useLoaderData()
   
    
  return (
   <>
      <h2 className="text-5xl font-bold text-center mt-6">Our All Applications</h2>
      <p className="text-center text-2xl text-gray-500 mt-6 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {
            appsData.map(apps => (<AllApps key={apps.id} apps = {apps}></AllApps>)
                
            )
        }

      </div>
   </>
  )
}
