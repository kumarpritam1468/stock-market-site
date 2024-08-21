import React from 'react'

const Funds = () => {
    return (
        <div className=' pt-24 px-8'>
            <div className=' py-8 px-6'>
                <h2 className=' font-medium text-2xl'>Equity</h2>
                <div className=' flex gap-16 py-6 px-10 items-center'>
                    <div>
                        <h3 className=' text-sm'>Margin Available</h3>
                        <h1 className=' text-4xl'>3,740</h1>
                    </div>

                    <div className=' w-[1.5px] h-16 bg-gray-300'></div>

                    <div>
                        <h3>Margin Used: 0</h3>
                        <h3>Opening Balance: 3,740</h3>
                    </div>
                </div>
            </div>

            <div className=' my-4 flex gap-4 px-16'>
                <button className=' btn btn-success text-white'>Add Funds</button>
                <button className=' btn btn-primary text-white'>Withdraw</button>
            </div>
        </div>
    )
}

export default Funds