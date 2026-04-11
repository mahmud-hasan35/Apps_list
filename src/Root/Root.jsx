import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigation } from 'react-router'

export default function Root() {
  const navigation = useNavigation()
  return (
    <div>
      <Navbar></Navbar>
            {/* 🔥 Global Loading */}
      {navigation.state === "loading" && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="h-1 bg-blue-500 animate-pulse"></div>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
