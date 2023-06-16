import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import "./nav.css";


const Sidebar = () => {
  return (
    <div className="bg-slate-500 text-white h-14 w-screen top-0 left-0 fixed grid grid-cols-2 " id="nav">
      <div className='flex items-center ps-5'>
        Parbat
        </div> 
     
      <ul className= ' flex justify-end h-full gap-10 me-12 items-center'>
        <NavLink to="./"><li className='flex gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

          Home</li></NavLink>
        
       <NavLink to="/contact" > <li className='flex gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>

Contact</li></NavLink>
        <li className=''>Project</li>
        <NavLink to="/about" ><li className=''>About</li></NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;