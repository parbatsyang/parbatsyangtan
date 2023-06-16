import React from 'react'
import CV from "../../assets/CV.pdf"
import Photo from "../../assets/sya.jpg"
import "./header.css"


const Header = () => {
  return (
   <>
   <div className='bg-slate-400 h-screen'> 
    <div className='flex items-center h-screen'>
      <div className='mx-auto'>
        <p><span className='text-5xl font-extralight mb-2'>Hello, I'm</span><br></br>
        <span className="text-6xl font-bold mb-2">Parbat Syangtan</span><br></br>
        <span className='text-2xl'>Frontend Developer</span></p>
        <button className='bg-slate-500 rounded-full w-32 p-5 mt-5 flex justify-evenly'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

          <a href={CV} download>CV</a>
          </button>
       
      </div>
      <div className='mx-auto'>
        <img src={Photo} className='rounded-full ' ></img>
      </div>
      <a href='/Contact' id='scroll'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
      </svg>
      
      </a>
   </div>
   
   
   </div>
  
   </>
  )
}

export default Header