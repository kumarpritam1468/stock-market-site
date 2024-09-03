import React, { useState } from 'react'
// import { watchlist } from '../data/data'
import { useAllStocks } from '../hooks/useAllStocks'
import StockRow from './StockRow';

const Sidebar = () => {

  const { allStocks, isLoading } = useAllStocks();

  return (
    <div className='fixed max-md:relative w-[30vw] max-md:w-screen max-md:pt-24 h-screen overflow-y-auto border-r border-r-slate-500'>
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

      {isLoading && <div className=' loading loading-spinner'></div>}

      {allStocks?.map((stock, index) => (
        <StockRow key={index} name={stock.name} isDown={stock.isDown} price={stock.price} percentChange={stock.percentChange} />
      ))}

      <p className=' p-4'>Demo price used for showcase purposes only. Prices are fictional and do not reflect real-time market data</p>
    </div>
  )
}

export default Sidebar