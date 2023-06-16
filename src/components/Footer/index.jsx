import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
// import {BiLogoGmail} from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='h-40 w-full bg-slate-500 mt-12'>
      <FaFacebook /> 
      <FaGithub />
      <FaLinkedin/>
      {/* <BiLogoGmail/> */}
    </div>
  )
}

export default Footer
