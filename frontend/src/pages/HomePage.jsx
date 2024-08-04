import React from 'react'
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
        <Navbar/>

        <section className=' py-32 flex flex-col items-center justify-center gap-16'>
            <img src="/images/homeHero.png" alt="Hero" className='w-[50vw]' />

            <div className=' flex flex-col items-center gap-6'>
                <h1 className=' text-5xl font-semibold text-center'>Invest in everything</h1>
                <h3 className=' text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h3>
                <button className=' mt-6 w-fit text-xl font-semibold px-8 py-2 bg-[#387ED1] hover:bg-slate-900 transition-all duration-300 ease-in-out text-white rounded-sm'>Sign up now</button>
            </div>
        </section>
    </>
  )
}

export default HomePage