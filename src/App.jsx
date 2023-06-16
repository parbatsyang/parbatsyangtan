import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Sidebar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact/Contact"
import Project from './components/Project/Project'

function App() {
  return (
<>
  <Sidebar/>
    <Routes>
  
    <Route path="/" element={<Home/>}/>
     
     <Route path="/home" element={<Header/>}/>
     
     <Route path='/project' element={<Project/>}/>
     
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>

     
      

   
       </Routes>
</>

   

  )
}

export default App