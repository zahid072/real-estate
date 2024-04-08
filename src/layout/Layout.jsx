import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../pages/shared/Navbar/Nav'
import Footer from '../pages/shared/footer/Footer'

const Layout = () => {
  return (
    <div className='max-w-7xl lg:mx-auto mx-2'>
        <div>
            <Nav/>
        </div>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
