import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className='fixed w-full border-b-2 border-b-gray-200 bg-white z-50'>
      <div className=' w-full max-w-[1100px] mx-auto flex justify-between items-center py-6'>
        <img src="/images/logo.svg" alt="Logo" width={130} />

        <div className='navlinks flex gap-11 items-center text-md text-gray-500 '>
          <a href="">SignUp</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Pricing</a>
          <a href="">Support</a>
          <FiMenu className=' text-2xl' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar