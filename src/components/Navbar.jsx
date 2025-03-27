// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex justify-around  bg-black h-[120px] items-center w-full'>
      <div className='text-white text-[30px] font-bold font-sans group-hover:text-black'>ROCKNATION</div>
      <ul className='flex text-white text-[20px] font- space-x-6'>
        <li className='hover:border-b-2 border-white h-[40px]'>
          <Link to="/" className=''>Home</Link>
        </li>
        <li className='relative group hover:border-b-2 border-white h-[40px]'>
          <Link to="/Music" className=''>Music</Link>
          {/* Dropdown Menu */}
          {/* <div className='absolute w-screen ml-[-658px] align-left hidden bg-black text-white mt-[50px]  h-[50vh] p-2 shadow-lg group-hover:block z-50 transition-all duration-300 opacity-0 group-hover:opacity-100'>
           
          </div> */}
        </li>
        

        <li className='relative group hover:border-b-2 border-white h-[40px]'>
          <Link to="/News" className=''>
            News
          </Link>
          {/* Dropdown Menu */}
          {/* <div className='absolute w-screen ml-[-820px] align-left hidden bg-black text-white mt-[50px]  h-[50vh] p-2 shadow-lg group-hover:block z-50'>
           
          </div> */}
        </li>

        <li className='hover:border-b-2 border-white h-[40px]'>
          <Link to="/Discover" className=''>Discover</Link>
        </li>
        <li className='hover:border-b-2 border-white h-[40px]'>
          <Link to="/About" className=''>About</Link>
        </li>
        
        <li className='hover:border-b-2 border-white h-[40px]'>
          <Link to="/Store" className=''>Store</Link>
        </li>
      </ul>
      <div className='flex items-center border-b-2 border-b-white'>
      <input
        type="text"
        placeholder=""
        className='h-[50px] w-[320px] px-2 focus:outline-none  bg-transparent text-white '
      />
      <img src='' alt='ser' className='bg-white rounded-full h-[40px] w-[40px]'/>
      </div>
      
    </nav>
  );
}

export default Navbar;