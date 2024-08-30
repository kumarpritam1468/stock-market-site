import React, { useState } from 'react'

const HoldingRow = ({ index, name, qty, cost }) => {
    const [showIcon, setShowIcon] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const isPositive = (value) => {
        if (value >= 0) {
            return true;
        }
        return false;
    }

    return (
        <tr onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} >
            <td>{name}</td>
            <td>{qty}</td>
            <td>{cost}</td>
            <td className={`${isPositive(20) ? 'text-green-600' : 'text-red-500'}`} >{cost}</td>
            {showIcon ?
                <button className=' px-5 py-1 mt-1 bg-red-500 text-white text-lg rounded-full max-md:hidden' onClick={() => document.getElementById(`sellBox${index}`).showModal()} >Sell</button>
                : <td className={`${isPositive(20) ? 'text-green-600' : 'text-red-500'}`} >
                    20
                </td>
            }
            <td className=' md:hidden'><button className=' px-5 max-md:px-3 py-1 mt-1 bg-red-500 text-white text-lg max-md:text-base rounded-full' onClick={() => document.getElementById(`sellBox${index}`).showModal()} >Sell</button></td>
            <dialog id={`sellBox${index}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{cost / qty}</p>
                    <p className="py-2">
                        Enter Quantity:
                        <input type="number" placeholder='Quantity' min={1} max={qty} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                    </p>
                    <p className="py-4">Total Amount : {(cost / qty * quantity).toFixed(2)}</p>
                    <button className="btn btn-error hover:text-white my-2 w-full ">Sell</button>
                </div>
            </dialog>
        </tr>
    )
}

export default HoldingRow