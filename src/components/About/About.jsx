import React from 'react'
import './about.css'
import me from "../../assets/hyyy.jpg"



const About = () => {
  return (
  
    <div className='about'>
    <div className='flex bg-blue-300  gap-10  '>
    
    <div className=' w-5/6 ps-12 pt-32'>
      
        <h1 className='text-5xl font-mono text-center w-1/2 pt-5' id='topic'>About Me</h1>
        
        
        <p className='text-2xl text-gray-800 w-2/3' id="explain">
        I'm a Parbat Syangtan who likes to spend much of my time in the computer.Graduated from National College Of Engineering.
        </p>
        <p className='text-2xl text-gray-800 w-2/3 ' id="explain">I am frontend developer with a passion for creating engaging and user-friendly web experiences.
            I enjoy collaborating with designers and backend developers to bring ideas to life and create seamless user interfaces. 
            I constantly stay updated with the latest web technologies and strive to deliver high-quality code.
            In my free time, I love exploring new libraries and frameworks, contributing to open-source projects, and staying active in the frontend developer community.
            </p> 
      
    </div>
    <div className='pt-32 w-2/4'>
        <img className='me' src={me}/>
    </div>
  </div>
  </div>
  )
}


export default About
