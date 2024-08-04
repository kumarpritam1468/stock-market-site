import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className='fixed w-full flex justify-between items-center px-20 2xl:px-60 py-6 border-b-2 border-b-gray-200 bg-white z-50'>
        <img src="/images/logo.svg" alt="Logo" width={120} />

        <div className='navlinks flex gap-11 items-center text-md text-gray-500 '>
            <a href="">SignUp</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Pricing</a>
            <a href="">Support</a>
            <FiMenu className=' text-2xl'/>
        </div>
    </nav>
  )
}

export default Navbar