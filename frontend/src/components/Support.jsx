import React from 'react'

import { IoIosSearch } from "react-icons/io";

const Support = () => {
    return (
        <div className=' pt-16 bg-blue-500 text-white'>
            <section className=' py-20 max-md:px-6 flex flex-col gap-10'>
                <h2 className=' font-medium text-xl'>Support Potral</h2>

                <div className=' flex max-md:flex-col gap-20'>
                    <div className=' w-[55%] max-md:w-full flex flex-col gap-8'>
                        <h3 className=' text-2xl'>Search for an answer or browse help topics to create a ticket</h3>

                        <div className=' bg-white p-4 flex items-center justify-between gap-4 w-full'>
                            <input type="text" className=' w-full text-black focus:outline-none' placeholder='Eg: How do I activate FnO, why is my order getting rejected ...' />
                            <IoIosSearch className=' text-gray-600 text-2xl' />
                        </div>

                        <div className=' flex gap-6 flex-wrap'>
                            <p className=' pb-2 border-b border-b-white cursor-pointer'>Track account opening</p>
                            <p className=' pb-2 border-b border-b-white cursor-pointer'>
                                Track segment activation
                            </p>
                            <p className=' pb-2 border-b border-b-white cursor-pointer'>
                                Intraday margins
                            </p>
                            <p className=' pb-2 border-b border-b-white cursor-pointer'>
                                Kite user manual
                            </p>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-6 pt-10'>
                        <h4 className=' font-medium text-xl'>Featured</h4>
                        <div className=' text-lg flex flex-col underline gap-2 pl-4'>
                            <p>Surveillance measure on scrips - August 2024</p>
                            <p>Latest Intraday leverages and Square-off timings</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Support