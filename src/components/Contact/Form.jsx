import React from 'react'

const Form = () => {
  return (
    <div className=''>
        <form className=' flex flex-col items-start'>
        <div className='flex'>
        <label className='text-2xl m-2'>Name:</label>
      <input type='text' className="w-full" placeholder='enter your full name'/>
        </div>
      <div className='flex'>
      <label className='text-2xl m-2'>Addres:</label>
      <input type='text'className='w-full' placeholder='enter your address'/>
      </div>
      <div>
      <label className='text-2xl m-2'>Number:</label>
      <input type='text' placeholder='enter your number'/><br></br>
      </div>
      
      <textarea rows={5} cols={33} className='text-2xl m-2 border border-spacing-1 border-gray-500'>Enter the message</textarea><br></br>
      <button class="rounded-full bg-blue-500 w-24 p-4">Submit</button>


    </form>
    </div>
    
  )
}
export default Form
