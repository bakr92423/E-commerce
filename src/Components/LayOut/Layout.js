import React from 'react'
import NavLogin from './NavLogin'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavLogin/>
        <Outlet></Outlet>
        <Footer/>
      
    </div>
  )
}

export default Layout
