import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';


export function Singup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError('');

        const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        const data = await response.json();
        if (data.message_id === 200) {
            alert(data.message);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
        }
        else {
            alert(data.message);
        }
    }


    return (
        <>
            <div className='flex flex-col justify-center items-center min-h-screen text-black'>
                <h1>Signup</h1>
                <div className='flex justify-center items-center p-3'>
                    <form className='flex flex-col gap-4 max-w-md w-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter Full Name' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='abc@example.com' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className=' p-1.5 outline-2 outline-black rounded' required />
                        </div>
                        <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>Signup</button>
                    </form>
                </div>

                <div className='text-red-500'>
                    {error && 
                        <div className='flex gap-2'>
                            <ShieldAlert/>
                            <p>Passwords don't match.</p>
                        </div>
                    }
                </div>
                <div>
                    Already have an account?  Click Here to <Link to={'/login'} className='text-blue-600'> Login </Link>
                </div>
            </div>
        </>
    )   
}
