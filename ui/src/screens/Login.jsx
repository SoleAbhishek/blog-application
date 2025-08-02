import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch('url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        const result = await response.json();
        if (!response.ok) {
            setError(result.message || "Login failed");
            return;
        }
        else{
            setError(result.message || "Login successful");
            navigate('/');
        }
    }



    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-screen text-black'>
                <h1>Login</h1>
                <div className='flex justify-center items-center p-3'>
                    <form className='flex flex-col gap-4 max-w-md w-full' onSubmit={handleSubmit}>
                        
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@example.com' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        
                        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>Login</button>
                    </form>
                </div>

                <div className='text-red-500'>
                    {error && 
                        <div className='flex gap-2'>
                            <ShieldAlert/>
                            <p>Wrong Credentials</p>
                        </div>
                    }
                </div>
                <div>
                    Don't have an account?  Click Here to <Link to={'/login'} className='text-blue-600'> Signup/Register. </Link>
                </div>
            </div>
        </>
    )   
}
