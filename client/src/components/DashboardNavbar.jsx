import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const DashboardNavbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const queryClient = useQueryClient();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const response = await fetch('/api/auth/logout', { method: 'POST' });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something Went Wrong");
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Logged Out");
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
            window.location.reload();
        }
    })

    return (
        <>
            <nav className='fixed w-[70vw] border-b-2 border-b-gray-200 bg-white z-30'>
                <div className=' w-full mx-auto flex justify-between items-center py-6 px-6'>
                    <img src="/images/kiteLogo.png" alt="Kite Logo" width={30} />

                    <div className='navlinks flex gap-6 items-center text-xs 2xl:text-sm text-gray-500 '>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                        <NavLink to='/dashboard/holdings'>Holdings</NavLink>
                        <NavLink to='/dashboard/positions'>Positions</NavLink>
                        <NavLink to='/dashboard/funds'>Funds</NavLink>
                        {isPending ? <div className=' loading-dots text-red-600 loading'></div> : <button to='/' className='text-red-500 font-semibold' onClick={() => logout()}>Logout</button>}
                        <FiMenu className=' text-2xl md:hidden' onClick={() => setMenuActive(!menuActive)} />
                    </div>

                </div>
            </nav>
            {menuActive &&
                <div className=' absolute right-6 top-20 px-12 py-6 flex flex-col gap-4 rounded-2xl border border-gray-300 bg-white z-50'>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <NavLink to='/dashboard/holdings'>Holdings</NavLink>
                    <NavLink to='/dashboard/positions'>Positions</NavLink>
                    <NavLink to='/dashboard/funds'>Funds</NavLink>
                    {isPending ? <div className=' loading-dots text-red-600 loading'></div> : <button to='/' className='text-red-500 font-semibold' onClick={() => logout()}>Logout</button>}
                </div>
            }
        </>
    )
}

export default DashboardNavbar