

import React from 'react'

import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navbar from './components/Navbar'

// import './App.css'

const App = () => {
  return (
    <>

       <BrowserRouter>

        <Navbar/>

          <Routes>
               <Route path='/'  element={<Login/>} />
               <Route path='about'  element={<About/>} />
               <Route path='contact'  element={<Contact/>} />
               <Route path='*'  element={<Error/>} />
          </Routes>
       </BrowserRouter>


    </>
  )
}

export default App

