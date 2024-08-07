import React from 'react'

const Pricing = () => {
    return (
        <>
            <section className=" pt-40 pb-32 mb-10 flex flex-col justify-center items-center gap-4 border-b border-b-gray-300">
                <h1 className=' font-medium text-5xl text-gray-700 max-md:px-8 max-md:text-center'>
                    Pricing
                </h1>
                <h5 className=' text-2xl'>
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h5>
            </section>

            <section className=" py-20 grid grid-cols-3 max-md:px-6 max-md:grid-cols-1 gap-x-4 text-center border-b border-b-gray-300">
                <div className=' flex flex-col items-center gap-6'>
                    <img src="/images/pricing0.svg" alt="Equity Fees 0" className=' w-4/5' />

                    <h2 className=' font-medium text-3xl'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className=' flex flex-col items-center gap-6'>
                    <img src="/images/intradayTrades.svg" alt="IntraDay Fees 20" className=' w-4/5' />

                    <h2 className=' font-medium text-3xl'>Intraday & FnO Trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className=' flex flex-col items-center gap-6'>
                    <img src="/images/pricing0.svg" alt="MF Fees 0" className=' w-4/5' />

                    <h2 className=' font-medium text-3xl'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </section>

            <section className=' flex flex-col items-center justify-center py-16 mb-10 gap-7'>
                <h2 className=' font-medium text-4xl'>
                    Open a Zerodha account
                </h2>

                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                <button className=' mt-6 w-fit text-xl font-semibold px-8 py-2 bg-[#387ED1] hover:bg-slate-900 transition-all duration-300 ease-in-out text-white rounded-sm'>Sign up now</button>
            </section>
        </>
    )
}

export default Pricing