import React, { useState } from 'react'
import { useAuthUser } from '../../hooks/useAuthUser'
import { useBalance } from '../../hooks/useBalance'

const Funds = () => {
  const authUser = useAuthUser();

  const [amount, setAmount] = useState();

  const { addMoney, addingMoney, withdrawMoney, withdrawingMoney } = useBalance();

  return (
    <div className=' pt-24 px-8'>
      <div className=' py-8 px-6'>
        <h2 className=' font-medium text-2xl underline'>Equity</h2>
        <div className=' flex gap-16 py-6 px-10 items-center'>
          <h3 className=' text-2xl'>Margin Available:</h3>
          <h1 className=' text-4xl'>{authUser?.accountBalance}</h1>
        </div>
      </div>

      <div className=' my-4 flex gap-4 px-16'>
        <button className=' btn btn-success text-white' onClick={() => document.getElementById(`addBox`).showModal()} >Add Funds</button>
        <button className=' btn btn-primary text-white' onClick={() => document.getElementById(`withdrawBox`).showModal()} >Withdraw</button>
      </div>

      <dialog id={`addBox`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg"> Add money to your account:</h3>
          <p className="py-2 my-4">
            Enter Amount:
            <input type="number" placeholder='Amount' min={1} onChange={(e) => setAmount(e.target.value)} className=' mx-4 input input-bordered' />
          </p>
          <button className="btn btn-success hover:text-white my-2 w-full bg-green-500" onClick={() => addMoney(amount)}>
          {addingMoney ? <div className=' loading loading-spinner'></div> : 'Add'}
          </button>
        </div>
      </dialog>
      <dialog id={`withdrawBox`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg"> Withdraw money from your account:</h3>
          <p className="py-2 my-4">
            Enter Amount:
            <input type="number" placeholder='Amount' min={1} onChange={(e) => setAmount(e.target.value)} className=' mx-4 input input-bordered' />
          </p>
          <button className="btn btn-primary hover:text-white my-2 w-full" onClick={() => withdrawMoney(amount)}>
            {withdrawingMoney ? <div className=' loading loading-spinner'></div> : 'Withdraw'}
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default Funds