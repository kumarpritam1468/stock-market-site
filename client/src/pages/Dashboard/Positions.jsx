import React from 'react'
import { positions } from '../../data/data';

const Positions = () => {
    const isPositive = (value) => {
        if (value >= 0) {
            return true;
        }
        return false;
    }

    return (
        <div className=' pt-24 px-8'>
            <h1 className=' text-xl font-medium mb-6'>Positions</h1>

            <div className="overflow-x-auto">
                <table className="table w-[60vw] table-zebra">
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Qty.</th>
                            <th>Avg. Cost</th>
                            <th>Curr. Value</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positions.map((position, index) => (
                            <tr key={index}>
                                <td>{position.name}</td>
                                <td>{position.qty}</td>
                                <td>{position.avg}</td>
                                <td className={`${isPositive(position.net) ? 'text-green-600' : 'text-red-500'}`} >{position.price}</td>
                                <td className={`${isPositive(position.net) ? 'text-green-600' : 'text-red-500'}`} >{position.net}</td>
                                <td className={`${isPositive(position.day) ? 'text-green-600' : 'text-red-500'}`} >{position.day}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Positions