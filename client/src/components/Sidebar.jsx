import React, { useState } from 'react'
import { watchlist } from '../data/data'

const Sidebar = () => {

  return (
    <div className='fixed w-[30vw] max-md:w-screen max-md:pt-24 h-screen overflow-y-auto border-r border-r-slate-500'>
      <div className=' w-full flex justify-evenly items-center py-[22px] border-b-2 border-b-slate-200'>
        <div className=' flex gap-2'>
          <h4 className=' font-medium '>NIFTY 50</h4>
          <p className=' text-green-500'>25,783</p>
          <p className=' text-green-500'>+237</p>
        </div>
        <div className=' flex gap-2'>
          <h4 className=' font-medium '>BANK NIFTY</h4>
          <p className=' text-green-500'>56,348</p>
          <p className=' text-green-500'>+437</p>
        </div>
      </div>

      <div className=' flex justify-between px-4 py-3 border-b-2 border-b-slate-200'>
        <h5>Stock</h5>

        <div className=' flex gap-6'>
          <p >Value</p>
          <p >Day chg.</p>
          <p className=' md:hidden'>Action</p>
        </div>
      </div>

      {watchlist.map((stock, index) => {
        const [showIcon, setShowIcon] = useState(false);
        const [quantity, setQuantity] = useState(0);
        return (
          <div className=' flex justify-between px-4 py-3 border-b-2 border-b-slate-200' key={index} onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
            <h5>{stock.name}</h5>

            {showIcon ?
              <button className=' px-4 py-1 bg-green-500 text-white rounded-full' onClick={() => document.getElementById(`buyBox${index}`).showModal()} >Buy</button>
              : <div className=' flex gap-6'>
                <p className={`${stock.isDown ? 'text-red-600' : 'text-green-600'}`} >{stock.price}</p>
                <p className={`${stock.isDown ? 'text-red-600' : 'text-green-600'}`} >{stock.percent}</p>
                <button className=' px-4 py-1 bg-green-500 text-white rounded-full md:hidden' onClick={() => document.getElementById(`buyBox${index}`).showModal()} >Buy</button>
              </div>
            }
            <dialog id={`buyBox${index}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{stock.name}</h3>
                <p className="py-4">Market Price : {stock.price}</p>
                <p className="py-2">
                  Enter Quantity:
                  <input type="number" placeholder='Quantity' min={1} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                </p>
                <p className="py-4">Total Amount : {(stock.price * quantity).toFixed(2)}</p>
                <button className="btn btn-success hover:text-white my-2 w-full bg-green-500">Buy</button>
              </div>
            </dialog>
          </div>
        )
      })}

      <p className=' p-4'>Demo price used for showcase purposes only. Prices are fictional and do not reflect real-time market data</p>
    </div>
  )
}

export default Sidebar