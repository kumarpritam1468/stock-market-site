import React from 'react'

const About = () => {
    return (
        <>
            <section className=" pt-32 pb-16 flex justify-center items-center border-b border-b-gray-300">
                <h1 className=' font-medium text-[2rem] leading-[3rem] text-gray-700 py-10 max-md:px-8 max-md:text-center'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h1>
            </section>

            <section className=' py-16 flex max-md:flex-col max-md:px-6 max-md:gap-8 gap-16 px-20'>
                <div className=' w-1/2 max-md:w-full flex flex-col gap-6 leading-8'>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>

                <div className=' w-1/2 max-md:w-full flex flex-col gap-4 leading-8'>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
                </div>
            </section>

            <section className=' py-16 flex flex-col items-center gap-10'>
                <h1 className=' font-medium text-4xl text-gray-600 pb-8'>People</h1>
                <div className=' flex max-md:flex-col max-md:px-6 max-md:gap-8 gap-6 px-20'>
                    <div className=' w-2/5 max-md:w-full flex items-center flex-col gap-8'>
                        <div className=' rounded-full overflow-hidden w-10/12 max-md:w-3/5'>
                            <img src="/images/nithinKamath.jpg" alt="Nitin Kamath" className=' w-full' />
                        </div>
                        <h2 className=' font-medium text-gray-600 text-xl -mb-4'>Nitin Kamath</h2>
                        <p>Founder, CEO</p>
                    </div>

                    <div className=' w-3/5 max-md:w-full flex flex-col leading-7 gap-6 mt-6'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>

                        <p>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About