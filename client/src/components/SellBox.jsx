import React from 'react'
import { useHoldings } from '../hooks/useHoldings';

const SellBox = ({ boxActive, setBoxActive, name, quantity, qty, setQuantity, currentValue }) => {

    const { sellStock, sellingStock } = useHoldings();

    const handleSubmit = (e) => {
        e.preventDefault();
        const price = (currentValue / qty * quantity).toFixed(2)
        sellStock({ name, quantity, price });
    }
    return (
        <div className={` ${boxActive ? 'fixed' : 'hidden'} top-0 left-0 h-full w-full bg-black/20 z-[999] flex items-center justify-center`}>
            {boxActive &&
                <div className=" relative w-96 max-md:w-11/12 bg-white p-6 rounded-2xl">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setBoxActive(false)} >✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">{(currentValue / qty).toFixed(2)}</p>
                    <p className="py-2">
                        Enter Quantity:
                        <input type="number" placeholder='Quantity' min={1} max={qty} onChange={(e) => setQuantity(e.target.value)} className=' mx-2 input input-bordered' />
                    </p>
                    <p className="py-4">Total Amount : {(currentValue / qty * quantity).toFixed(2)}</p>
                    <button className="btn btn-error hover:text-white my-2 w-full " onClick={handleSubmit}>
                        {sellingStock ? <div className=' loading loading-spinner'></div> : 'Sell'}
                    </button>
                </div>
            }
        </div>
    )
}

export default SellBox