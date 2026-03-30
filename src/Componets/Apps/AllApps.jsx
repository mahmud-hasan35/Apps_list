import React from 'react'
import { FaDownload, FaStar } from 'react-icons/fa'

export default function AllApps({apps}) {
  return (
        <>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            
            <img
              src={apps.image}
              alt={apps.title}
              className="h-40 w-full object-cover rounded mb-3"
            />
    
            <h3 className="text-sm font-semibold">
              {apps.title}
            </h3>
    
            <div className="flex justify-between mt-2 text-xs items-center">
              <span className="text-green-600 flex items-center gap-1">
                <FaDownload /> {apps.downloads}
              </span>
    
              <span className="text-orange-500 flex items-center gap-1">
                <FaStar /> {apps.ratingAvg}
              </span>
            </div>
          </div>
    
         
        </>
  )
}
