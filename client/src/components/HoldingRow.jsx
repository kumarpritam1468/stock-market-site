import React, { useEffect, useState } from 'react'
import SellBox from './SellBox';

const HoldingRow = ({ name, qty, cost }) => {

    const [showIcon, setShowIcon] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [valueChange, setValueChange] = useState(0);
    const [boxActive, setBoxActive] = useState(false);

    useEffect(() => {
        setValueChange(Number((Math.random() * 40 - 20).toFixed(2)));
    }, []);

    const isPositive = (value) => {
        if (value >= 0) {
            return true;
        }
        return false;
    }

    const currentValue = cost + (cost * valueChange / 100);

    return (
        <tr onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} className='' >
            <td>{name}</td>
            <td>{qty}</td>
            <td>₹{cost.toFixed(2)}</td>
            <td className={`${(currentValue >= cost) ? 'text-green-600' : 'text-red-500'}`} >₹{currentValue.toFixed(2)}</td>
            {showIcon ?
                <button className=' px-5 py-1 mt-1 bg-red-500 text-white text-lg rounded-full max-md:hidden' onClick={() => setBoxActive(true)} >Sell</button>
                : <td className={`${isPositive(valueChange) ? 'text-green-600' : 'text-red-500'} max-md:hidden`} >
                    {valueChange}%
                </td>
            }
            <td className={`${isPositive(valueChange) ? 'text-green-600' : 'text-red-500'} md:hidden`} >
                {valueChange}%
            </td>
            <td className=' md:hidden'><button className=' px-5 max-md:px-3 py-1 mt-1 bg-red-500 text-white text-lg max-md:text-base rounded-full' onClick={() => setBoxActive(true)} >Sell</button></td>

            <SellBox boxActive={boxActive} setBoxActive={setBoxActive} name={name} quantity={quantity} qty={qty} setQuantity={setQuantity} currentValue={currentValue} />
        </tr>
    )
}

export default HoldingRow