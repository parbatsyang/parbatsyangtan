import React from 'react'
import Sidebar from '../Navbar'
import Header from '../Header/Header'
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Footer from "../Footer"


const index = () => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default index
