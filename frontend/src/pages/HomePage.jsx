import React from 'react'
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <>
            <Navbar />

            <section className=' pt-32 pb-16 flex flex-col items-center justify-center gap-16'>
                <img src="/images/homeHero.png" alt="Hero" className='w-[50vw]' />

                <div className=' flex flex-col items-center gap-6'>
                    <h1 className=' text-5xl font-semibold text-center'>Invest in everything</h1>
                    <h3 className=' text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h3>
                    <button className=' mt-6 w-fit text-xl font-semibold px-8 py-2 bg-[#387ED1] hover:bg-slate-900 transition-all duration-300 ease-in-out text-white rounded-sm'>Sign up now</button>
                </div>
            </section>

            <section className=' flex flex-col py-16'>
                <div className=' flex'>
                    <div className=" flex flex-col gap-12 w-1/2 pr-20">
                        <h2 className=' text-4xl font-semibold text-gray-800'>Trust with confidence</h2>

                        <div className=' flex flex-col gap-8'>
                            <div className=' flex flex-col gap-2'>
                                <h4 className=' text-xl text-gray-700 font-medium'>Customer-first always</h4>
                                <p className=' text-gray-500 leading-7'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <h4 className=' text-xl text-gray-700 font-medium'>No spam or gimmicks</h4>
                                <p className=' text-gray-500 leading-7'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <h4 className=' text-xl text-gray-700 font-medium'>The Zerodha universe</h4>
                                <p className=' text-gray-500 leading-7'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <h4 className=' text-xl text-gray-700 font-medium'>Do better with money</h4>
                                <p className=' text-gray-500 leading-7'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                            </div>

                        </div>
                    </div>

                    <div className=' w-[55%] flex flex-col items-center gap-6'>
                        <img src="/images/ecosystem.png" alt="Ecosystem" className=' w-full' />

                        <div className=' flex gap-12'>
                            <h3 className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Explore Our Products →</h3>
                            <h3 className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Try Kite Demo →</h3>
                        </div>
                    </div>
                </div>

                <img src="/images/pressLogos.png" alt="Press Logos" className=' w-3/5 mt-10 mx-auto' />

            </section>

            <section className=' flex gap-0 py-16'>
                <div>
                    <h2 className=' font-medium text-4xl pb-7'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <h3 className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer mt-4'>See Pricing →</h3>
                </div>

                <div className=' flex gap-6 w-full'>
                    <div className=' flex items-center'>
                        <img src="/images/pricingMF.svg" alt="0 pricing" width={120} />
                        <p className=' text-xs -ml-4'>Free account <br />
                            opening</p>
                    </div>
                    <div className=' flex items-center'>
                        <img src="/images/pricingMF.svg" alt="0 pricing" width={120} />
                        <p className=' text-xs -ml-4'>Free equity delivery <br />
                            and direct mutual funds</p>
                    </div>
                    <div className=' flex items-center'>
                        <img src="/images/intradayTrades.svg" alt="20 pricing" width={120} />
                        <p className=' text-xs'>Intraday and<br />
                            FnO</p>
                    </div>
                </div>
            </section>

            <section className=' flex py-16 items-center gap-32'>
                <img src="/images/education.svg" alt="Education" className=' w-[40%]' />

                <div className=' flex flex-col gap-8'>
                    <h2 className=' font-normal text-3xl'>
                        Free and open market education
                    </h2>

                    <div className=' flex flex-col gap-4'>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <h3 className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>Varsity →</h3>
                    </div>

                    <div className=' flex flex-col gap-4'>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <h3 className=' text-blue-600 font-medium text-lg hover:text-slate-900 duration-300 ease-in-out transition-all cursor-pointer'>TrendingQ&A →</h3>
                    </div>
                </div>
            </section>

            <section className=' flex flex-col items-center justify-center py-16 gap-7'>
                <h2 className=' font-medium text-4xl'>
                    Open a Zerodha account
                </h2>

                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                <button className=' mt-6 w-fit text-xl font-semibold px-8 py-2 bg-[#387ED1] hover:bg-slate-900 transition-all duration-300 ease-in-out text-white rounded-sm'>Sign up now</button>
            </section>
        </>
    )
}

export default HomePage