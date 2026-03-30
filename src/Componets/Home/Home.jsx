import React from 'react'
import Hero from '../../Hero/Hero'
import Trending from '../Trending/Trending'
import { useLoaderData } from 'react-router'

export default function Home() {
    const data = useLoaderData()
    
    
  
    
  return (
    <div>
      <Hero></Hero>
      <Trending data={data}></Trending>
    </div>
  )
}
