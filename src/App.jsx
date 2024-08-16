import { useState } from 'react'
import './App.css'
import {Home,About , Blog , Services, Nav} from './components/index'
import {NavLink ,Outlet,Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Layout from './components/Layout'


function App() {
  

  return (
    <>
        
        <div className="main-container  w-screen h-screen">
        
                


        <Routes >
          <Route path='/' element={<Layout/>} > 
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/services' element={<Services/>} />
          
          </Route>
         
        </Routes>

        </div>
    
    
    </>
  )
}

export default App
