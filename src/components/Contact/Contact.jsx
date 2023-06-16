import React from 'react'
import contact from "../../assets/contact.avif"
import "./contact.css"
import Maps from "../GoogleMap/Maps"
import Form from './Form'

const Contact = () => {
  return (
  <>
    <div className='h-screen w-screen'>
    <h1 className='text-center text-5xl text-white' ><span id="contact" >Contact</span></h1>
      <img className="h-2/6 w-full " src={contact} alt='plain bg'/>
     <div className='mt-5 flex justify-around'>
     <Maps/>
     <Form/>
     </div>
    
     </div>
  </>
  )
}

export default Contact
