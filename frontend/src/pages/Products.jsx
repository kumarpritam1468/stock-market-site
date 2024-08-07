import React from 'react'

const Products = () => {
    return (
        <>
            <section className=" pt-40 pb-32 mb-10 flex flex-col justify-center items-center gap-4 border-b border-b-gray-300">
                <h1 className=' font-medium text-5xl text-gray-700 max-md:px-8 max-md:text-center'>
                    Technology
                </h1>
                <h5 className=' text-2xl'>
                    Sleek, modern, and intuitive trading platforms
                </h5>
                <p>
                    Check out our <span className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Investment Offerings →</span>
                </p>
            </section>

            <section className=" py-12 flex max-md:flex-col justify-between max-md:gap-6 items-center">
                <img src="/images/kite.png" alt="Kite" />

                <div className=' flex flex-col gap-8 w-1/3 max-md:w-10/12'>
                    <h2 className=' font-medium text-3xl'>Kite</h2>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div className=' flex gap-12'>
                        <h3 className=' text-blue-600 font-medium hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Try Demo →</h3>
                        <h3 className=' text-blue-600 font-medium hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Learn More →</h3>
                    </div>

                    <div className=' flex gap-6'>
                        <img src="/images/googlePlayBadge.svg" alt="Play store" />
                        <img src="/images/appstoreBadge.svg" alt="Apple store" />
                    </div>
                </div>
            </section>

            <section className=" py-12 flex flex-row-reverse max-md:flex-col justify-between max-md:gap-6 items-center">
                <img src="/images/console.png" alt="Console" />

                <div className=' flex flex-col gap-8 w-1/3 max-md:w-10/12'>
                    <h2 className=' font-medium text-3xl'>Console</h2>
                    <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <h3 className=' text-blue-600 font-medium hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Learn More →</h3>
                </div>
            </section>

            <section className=" py-12 flex max-md:flex-col justify-between max-md:gap-6 items-center">
                <img src="/images/coin.png" alt="Coin" />

                <div className=' flex flex-col gap-8 w-1/3 max-md:w-10/12'>
                    <h2 className=' font-medium text-3xl'>Coin</h2>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                        <h3 className=' text-blue-600 font-medium hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Coin →</h3>

                    <div className=' flex gap-6'>
                        <img src="/images/googlePlayBadge.svg" alt="Play store" />
                        <img src="/images/appstoreBadge.svg" alt="Apple store" />
                    </div>
                </div>
            </section>

            <section className=" py-12 flex flex-row-reverse max-md:flex-col justify-between max-md:gap-6 items-center">
                <img src="/images/kiteconnect.png" alt="Kite Connect" />

                <div className=' flex flex-col gap-8 w-1/3 max-md:w-10/12'>
                    <h2 className=' font-medium text-3xl'>Kite Connect API</h2>
                    <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <h3 className=' text-blue-600 font-medium hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Kite Connect →</h3>
                </div>
            </section>

            <section className=" py-12 px-12 flex max-md:flex-col justify-between max-md:gap-6 items-center">
                <img src="/images/varsity.png" alt="Varsity Mobile" />

                <div className=' flex flex-col gap-8 w-1/3 max-md:w-10/12'>
                    <h2 className=' font-medium text-3xl'>Varsity Mobile</h2>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>

                    <div className=' flex gap-6'>
                        <img src="/images/googlePlayBadge.svg" alt="Play store" />
                        <img src="/images/appstoreBadge.svg" alt="Apple store" />
                    </div>
                </div>
            </section>

            <section className=" py-20 px-6 flex flex-col gap-6 items-center justify-center">
                <h2 className=' font-medium text-3xl'>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-32 gap-y-16 mt-16">
                    <img src="/images/smallcaseLogo.png" alt="Smallcase Logo" width={200} />
                    <img src="/images/streakLogo.png" alt="Streak Logo" width={200} />
                    <img src="/images/sensibullLogo.svg" alt="Sensibull Logo" width={200} />
                    <img src="/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" width={200} />
                    <img src="/images/goldenpiLogo.png" alt="Tijori Logo" width={200} />
                    <img src="/images/dittoLogo.png" alt="Ditto Logo" width={150} />
                </div>

                <button className=' mt-10 w-fit text-xl font-semibold px-8 py-2 bg-[#387ED1] hover:bg-slate-900 transition-all duration-300 ease-in-out text-white rounded-sm'>Sign up now</button>
            </section>
        </>
    )
}

export default Products