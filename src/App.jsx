import React from 'react'

import './App.css'
import Nav from './Component/Nav/Nav'
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
// import Login from './Component/Login/Login'
// import Signup from './Signup/Signup'
// import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <Nav />
   <Outlet />
    <Footer/>

    </>
  )
}

export default App
