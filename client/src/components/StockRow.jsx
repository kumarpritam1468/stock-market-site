import React, { useState } from 'react'
import BuyBox from './BuyBox';

const StockRow = ({ name, isDown, price, percentChange }) => {

    const [showIcon, setShowIcon] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [boxActive, setBoxActive] = useState(false);

    return (
        <div className=' flex justify-between px-4 py-3 border-b-2 border-b-slate-200' onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)}>
            <h5>{name}</h5>

            {showIcon ?
                <button className=' px-4 py-1 bg-green-500 text-white rounded-full' onClick={() => setBoxActive(true)} >Buy</button>
                : <div className=' flex gap-6 max-md:hidden'>
                    <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >₹{price}</p>
                    <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >{percentChange}%</p>
                </div>
            }

            <div className=' flex gap-6 md:hidden'>
                <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >₹{price}</p>
                <p className={`${isDown ? 'text-red-600' : 'text-green-600'}`} >{percentChange}%</p>
                <button className=' px-4 py-1 bg-green-500 text-white rounded-full md:hidden' onClick={() => setBoxActive(true)} >Buy</button>
            </div>

            <BuyBox boxActive={boxActive} setBoxActive={setBoxActive} name={name} quantity={quantity} setQuantity={setQuantity} price={price} />
        </div>
    )
}

export default StockRow