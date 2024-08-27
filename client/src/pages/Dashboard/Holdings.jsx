import React, { useState } from 'react'

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
        <table className="table w-[60vw] max-md:w-screen max-md:table-xs table-zebra">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>Curr. Value</th>
              <th>P&L</th>
              <th className=' md:hidden'>Action</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => {
              const [showIcon, setShowIcon] = useState(false);
              const [quantity, setQuantity] = useState(0);
              return (
                <tr key={index} onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} >
                  <td>{holding.name}</td>
                  <td>{holding.qty}</td>
                  <td>{holding.avg}</td>
                  <td className={`${isPositive(holding.net) ? 'text-green-600' : 'text-red-500'}`} >{holding.price}</td>
                  {showIcon ?
                    <button className=' px-5 py-1 mt-1 bg-red-500 text-white text-lg rounded-full max-md:hidden' onClick={() => document.getElementById(`sellBox${index}`).showModal()} >Sell</button>
                    : <td className={`${isPositive(holding.net) ? 'text-green-600' : 'text-red-500'}`} >{holding.net}</td>
                  }
                  <td className=' md:hidden'><button className=' px-5 max-md:px-3 py-1 mt-1 bg-red-500 text-white text-lg max-md:text-base rounded-full' onClick={() => document.getElementById(`sellBox${index}`).showModal()} >Sell</button></td>
                  <dialog id={`sellBox${index}`} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      <h3 className="font-bold text-lg">{holding.name}</h3>
                      <p className="py-4">{holding.price}</p>
                      <p className="py-2">
                        Enter Quantity:
                        <input type="number" placeholder='Quantity' min={1} max={holding.qty} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                      </p>
                      <p className="py-4">Total Amount : {(holding.price * quantity).toFixed(2)}</p>
                      <button className="btn btn-error hover:text-white my-2 w-full ">Sell</button>
                    </div>
                  </dialog>
                </tr>
              )
            })}
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
      <p className=' p-4'>Demo price used for showcase purposes only. Prices are fictional and do not reflect real-time market data</p>
    </div>
  )
}

export default Holdings;