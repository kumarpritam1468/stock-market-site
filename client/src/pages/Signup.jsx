import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {toast} from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        cPassword: ''
    });

    const {mutate:signup, isPending} = useMutation({
        mutationFn: async (inputs) => {
            const {name, email, phone, password, cPassword} = inputs;
            try {
                const response = await fetch('/api/auth/register', {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({name, email, phone, password, cPassword})
                });
    
                const data = await response.json();
    
                if (!response.ok) throw new Error(data.error || 'Something went wrong');
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Logged In");
            navigate('/dashboard');
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    const handleInput = (e) => {
        e.preventDefault();
        signup(inputs);
    }

    return (
        <div className='login-pg flex justify-center items-center h-[100svh]'>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
                <div className='w-full p-6 lg:px-10 rounded-3xl shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
                        Sign Up to Zerodha
                    </h1>

                    <form className=' flex gap-4 flex-col' onSubmit={handleInput}>
                        <div>
                            <input type='text' placeholder='Name' className='w-full input input-bordered text-white h-10' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                        </div>

                        <div>
                            <input type='email' placeholder='E-mail' className='w-full input input-bordered text-white h-10' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                        </div>
                        <div>
                            <input type='number' placeholder='Phone Number' className='w-full input input-bordered text-white h-10' value={inputs.phone} onChange={(e) => setInputs({ ...inputs, phone: e.target.value })} />
                        </div>

                        <div>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered text-white h-10'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            />
                        </div>

                        <div>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-full input input-bordered text-white h-10'
                                value={inputs.cPassword}
                                onChange={(e) => setInputs({ ...inputs, cPassword: e.target.value })}
                            />
                        </div>

                        <Link to='/login' className='text-sm text-gray-300 hover:underline hover:text-blue-400 inline-block'>
                            Already have an account?
                        </Link>

                        <div>
                            <button
                                className='btn btn-block text-white btn-primary text-base bg-blue-500 btn-sm mt-2 border border-slate-700'
                                type='submit'
                            >
                                {isPending ? <div className=' loading loading-spinner'></div> : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup