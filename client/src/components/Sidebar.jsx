import React, { useState } from 'react'
import { watchlist } from '../data/data'

const Sidebar = () => {

  return (
    <div className='fixed w-[30vw] max-md:hidden h-screen border-r border-r-slate-500'>
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

      {watchlist.map((stock, index) => {
        const [showIcons, setShowIcons] = useState(false);
        const [quantity, setQuantity] = useState(0);
        return (
          <div className=' flex justify-between px-4 py-3 border-b-2 border-b-slate-200' key={index} onMouseEnter={() => setShowIcons(true)} onMouseLeave={() => setShowIcons(false)}>
            <h5>{stock.name}</h5>

            {showIcons ?
              <div className=' flex gap-2'>
                <button className=' px-4 py-1 bg-green-500 text-white rounded-full' onClick={() => document.getElementById(`buyBox${index}`).showModal()} >Buy</button>
                <button className=' px-4 py-1 bg-red-500 text-white rounded-full' onClick={() => document.getElementById(`sellBox${index}`).showModal()} >Sell</button>
              </div>
              : <div className=' flex gap-4'>
                <p className={`${stock.isDown ? 'text-red-600' : 'text-green-600'}`} >{stock.price}</p>
                <p className={`${stock.isDown ? 'text-red-600' : 'text-green-600'}`} >{stock.percent}</p>
              </div>
            }
            <dialog id={`buyBox${index}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{stock.name}</h3>
                <p className="py-4">{stock.price}</p>
                <p className="py-2">
                  Enter Quantity:
                  <input type="number" placeholder='Quantity' min={1} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                </p>
                <p className="py-4">Total Amount : {(stock.price * quantity).toFixed(2)}</p>
                <button className="btn btn-success hover:text-white my-2 w-full bg-green-500">Buy</button>
              </div>
            </dialog>
            <dialog id={`sellBox${index}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{stock.name}</h3>
                <p className="py-4">{stock.price}</p>
                <p className="py-2">
                  Enter Quantity:
                  <input type="number" placeholder='Quantity' min={1} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                </p>
                <p className="py-4">Total Amount : {(stock.price * quantity).toFixed(2)}</p>
                <button className="btn btn-error hover:text-white my-2 w-full ">Sell</button>
              </div>
            </dialog>
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar