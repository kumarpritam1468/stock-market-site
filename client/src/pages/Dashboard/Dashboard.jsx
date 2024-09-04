import React from 'react'
import { useAuthUser } from '../../hooks/useAuthUser'
import { PieChart } from '../../components/PieChart'
import { useHoldings } from '../../hooks/useHoldings';

const Dashboard = () => {
  const authUser = useAuthUser();
  const { allHoldings } = useHoldings();

  const data = {
    labels: allHoldings?.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: 'Invested',
        data: allHoldings?.map((stock) => stock.cost),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=' pt-24 px-8'>
      <h1 className=' text-2xl font-semibold'>Hello, {authUser.name} !</h1>

      <div className=' w-full h-[1.5px] bg-gray-300 mt-4'></div>

      <div className=' w-full py-4 flex max-md:flex-col gap-6 items-center justify-center'>
        <div className=' py-8 px-6'>
          <h2>Equity</h2>
          <div className=' flex gap-16 py-6 px-10 items-center'>
            <div>
              <h3 className=' text-base'>Margin Available</h3>
              <h1 className=' text-4xl'>Rs {authUser.accountBalance.toFixed(2)}/-</h1>
            </div>
          </div>
        </div>

        <div className=' flex-1 w-[28vw] max-md:w-11/12'>
          <h2 className=' font-medium text-center text-xl mb-4'>Holdings</h2>
          {allHoldings?.length > 0
            ? <PieChart data={data} />
            : <h2>Invest in some stocks to view analytical chart</h2>
          }
        </div>
      </div>

      {/* <div className=' w-full h-[1.5px] bg-gray-300'></div>

      <div className=' py-8 px-6'>
        <h2>Equity</h2>
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
      </div>

      <div className=' w-full h-[1.5px] bg-gray-300'></div> */}
    </div>
  )
}

export default Dashboard