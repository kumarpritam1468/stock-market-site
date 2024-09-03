import React from 'react'
import { useHoldings } from '../hooks/useHoldings';

const BuyBox = ({ boxActive, setBoxActive, name, quantity, setQuantity, price }) => {

    const { buyStock, buyingStock } = useHoldings();

    const handleSubmit = (e) => {
        e.preventDefault();
        const cost = (price * quantity).toFixed(2);
        buyStock({ name, quantity, cost });
        setBoxActive(false);
    }
    return (
        <div className={` ${boxActive ? 'fixed' : 'hidden'} top-0 left-0 h-full w-full bg-black/20 z-[999] flex items-center justify-center`}>
            {boxActive &&
                <div className=" relative w-96 max-md:w-11/12 bg-white p-6 rounded-2xl">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setBoxActive(false)}>✕</button>
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
                        onClick={handleSubmit}
                    >
                        {buyingStock ? <div className=' loading loading-spinner'></div> : 'Buy'}
                    </button>
                </div>
            }
        </div>
    )
}

export default BuyBox