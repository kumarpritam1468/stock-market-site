import React from 'react'

import { holdings } from '../../data/data.js';

const Holdings = () => {
  const isPositive = (value) => {
    if (value >= 0) {
      return true;
    }
    return false;
  }
  return (
    <div className=' pt-24 px-8'>
      <h1 className=' text-xl font-medium mb-6'>Holdings</h1>

      <div className="overflow-x-auto">
        <table className="table w-[60vw] table-zebra">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>Curr. Value</th>
              <th>P&L</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => (
              <tr key={index}>
                <td>{holding.name}</td>
                <td>{holding.qty}</td>
                <td>{holding.avg}</td>
                <td className={`${isPositive(holding.net) ? 'text-green-600' : 'text-red-500'}`} >{holding.price}</td>
                <td className={`${isPositive(holding.net) ? 'text-green-600' : 'text-red-500'}`} >{holding.net}</td>
                <td className={`${isPositive(holding.day) ? 'text-green-600' : 'text-red-500'}`} >{holding.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=' py-8 px-6'>
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
    </div>
  )
}

export default Holdings;