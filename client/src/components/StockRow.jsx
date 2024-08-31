import React, { useState } from 'react'
import { useHoldings } from '../hooks/useHoldings'

const StockRow = ({ index, name, isDown, price, percentChange }) => {
    const { buyStock, buyingStock } = useHoldings();

    const [showIcon, setShowIcon] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cost = (price * quantity).toFixed(2);
        buyStock({ name, quantity, cost });
    }

    return (
        <div className=' flex justify-between px-4 py-3 border-b-2 border-b-slate-200' onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
            <h5>{name}</h5>

            {showIcon ?
                <button className=' px-4 py-1 bg-green-500 text-white rounded-full' onClick={() => document.getElementById(`buyBox${index}`).showModal()} >Buy</button>
                : <div className=' flex gap-6'>
                    <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >₹{price}</p>
                    <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >{percentChange}%</p>
                    <button className=' px-4 py-1 bg-green-500 text-white rounded-full md:hidden' onClick={() => document.getElementById(`buyBox${index}`).showModal()} >Buy</button>
                </div>
            }
            <dialog id={`buyBox${index}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Market Price : {price}</p>
                    <p className="py-2">
                        Enter Quantity:
                        <input
                            type="number"
                            placeholder='Quantity'
                            min={1}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                            className=' mx-2 input input-bordered' />
                    </p>
                    <p className="py-4">Total Amount : {(price * quantity).toFixed(2)}</p>
                    <button
                        className="btn btn-success hover:text-white my-2 w-full bg-green-500"
                        onClick={(e) => {
                            handleSubmit(e);
                            document.getElementById(`buyBox${index}`).close();
                        }}
                    >
                        {buyingStock ? <div className=' loading loading-spinner'></div> : 'Buy'}
                    </button>
                </div>
            </dialog>
        </div>
    )
}

export default StockRow