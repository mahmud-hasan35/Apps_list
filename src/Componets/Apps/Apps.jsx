import React from 'react'
import { useLoaderData } from 'react-router'
import AllApps from './AllApps';

export default function Apps() {

    const appsData = useLoaderData()
    console.log(appsData);
    
  return (
   <>
      <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
      <p className="text-center text-gray-500 mt-2 mb-10">
        Explore All Trending Apps on the Market developed by us
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
