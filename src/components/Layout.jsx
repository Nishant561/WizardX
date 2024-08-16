import React from 'react'
import { Nav } from './index'
import Footer  from './Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
      <nav>
        <Nav/>
      </nav>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout
