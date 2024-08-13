import React from 'react'
import { useAuthUser } from '../../hooks/useAuthUser'

const Dashboard = () => {
  const authUser = useAuthUser();

  return (
    <div className=' pt-24 px-8'>
      <h1 className=' text-2xl font-semibold'>Hello, {authUser.name} !</h1>

      <div className=' w-full h-[1.5px] bg-gray-300 mt-4'></div>

      <div className=' py-8 px-6'>
        <h2>Equity</h2>
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

      <div className=' w-full h-[1.5px] bg-gray-300'></div>

      <div className=' py-8 px-6'>
        <h2>Equity</h2>
        <div className=' flex gap-16 py-6 px-10 items-center'>
          <div>
            <h3 className=' text-sm'>P & L</h3>
            <h1 className=' text-4xl text-green-500'>+ 1,243</h1>
          </div>

          <div className=' w-[1.5px] h-16 bg-gray-300'></div>

          <div>
            <h3>Current Value: 4,243</h3>
            <h3>Investment: 3,000</h3>
          </div>
        </div>
      </div>

      <div className=' w-full h-[1.5px] bg-gray-300'></div>
    </div>
  )
}

export default Dashboard