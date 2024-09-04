// import { useQuery } from '@tanstack/react-query';
import React from 'react'

// import { holdings } from '../../data/data.js';
import { useHoldings } from '../../hooks/useHoldings'
import HoldingRow from '../../components/HoldingRow'
import { BarChart } from '../../components/BarChart';

const Holdings = () => {
  const { allHoldings, isLoading } = useHoldings();

  const labels = allHoldings?.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Invested',
        data: allHoldings?.map((stock) => stock.cost),
        backgroundColor: 'rgba(0, 220, 50, 0.5)',
      },
    ],
  };

  return (
    <div className=' pt-24 px-8 '>
      <h1 className=' text-xl font-medium mb-6'>Holdings</h1>

      <div className="overflow-x-auto mb-6">
        {isLoading
          ? <div className=' loading loading-spinner'></div>
          : <table className="table w-[60vw] max-md:w-screen max-md:table-xs table-zebra">
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
              {allHoldings?.map((stock, index) => (
                <HoldingRow key={index} name={stock.name} qty={stock.quantity} cost={stock.cost} />
              ))}
            </tbody>
          </table>}
      </div>

      {/* <div className=' py-8 px-6'>
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
      </div> */}

      <BarChart data={data} />

      <p className=' p-4'>Demo price used for showcase purposes only. Prices are fictional and do not reflect real-time market data</p>
    </div>
  )
}

export default Holdings;