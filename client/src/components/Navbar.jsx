import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav className='fixed w-full border-b-2 border-b-gray-200 bg-white z-30'>
        <div className=' w-full max-w-[1100px] mx-auto flex justify-between items-center py-6 max-xl:px-6'>
          <img src="/images/logo.svg" alt="Logo" width={130} />

          <div className='navlinks flex gap-11 items-center text-md text-gray-500 '>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/support'>Support</NavLink>
            <FiMenu className=' text-2xl md:hidden' onClick={() => setMenuActive(!menuActive)} />
          </div>

        </div>
      </nav>
      {menuActive &&
        <div className=' absolute right-6 top-20 px-12 py-6 flex flex-col gap-4 rounded-2xl border border-gray-300 bg-white z-50'>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/support'>Support</NavLink>
        </div>
      }
    </>
  )
}

export default Navbar