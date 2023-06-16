import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

const Project = () => {
  const [gitData,setGitData]=useState([{}]);
  const getData=async()=>{
    const data= await axios.get('https://api.github.com/users/parbatsyang/repos');
  //  console.log(data.data);
   setGitData(data.data);
    
  }
  // console.log(gitData);
  useEffect(()=>{
    getData();
  },[]);
  return (
   <>
   <h1 className='text-5xl font-mono text-center m-5 '>Project</h1>
   <div className='flex flex-wrap justify-evenly'>
      {
        gitData.map((p,i)=>{
          return(
            
             <Card key={i} data={p}/>
             
          )
        })
      }
      </div>
   </>
  )
}

export default Project
