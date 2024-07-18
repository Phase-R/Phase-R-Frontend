'use client';

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getCookie } from "cookies-next";

const poppins = Poppins({subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

const SignupPage = () => {
    const router = useRouter(); 

    const [divState, setDivState] = useState('active');
    const [errState, setErrState] = useState('error-free');
    const [errMsg, setErrMsg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Signing Up...');      

    const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDivState("loading");

        const formData = new FormData(event.currentTarget);
        const userData = {
            username: formData.get('username') as string,
            fname: formData.get('fname') as string,
            lname: formData.get('lname') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
            age: parseInt(formData.get('age') as string, 10)
        };

        if (userData.password !== userData.confirmPassword) {
            setErrState('error');
            setErrMsg('Passwords do not match');
            setDivState('active');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/user/new', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {      
                    'Content-Type': 'application/json'
                }
            });     

            if (response.ok) {
                setLoadingMessage('Sign Up Successful. Redirecting...');
                router.push('/login'); // Using router.push from next/navigation
            }
            else if(response.status === 409){
                setErrState('error');
                setErrMsg('User already exists');
                setDivState('active');
            }   
            else {
                setErrState('error');
                setErrMsg('An error occurred. Please try again.');
                setDivState('active');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrState('error');
            setErrMsg('An error occurred. Please try again.');
            setDivState('active');
        }
    };

    return (
        <>
            <div className="absolute z-20 left-0 right-0 mx-auto">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-[350px] md:w-[500px] bg-primary-black-3 mx-auto shadow-md shadow-[#222] p-5">
                        <h1 className={`text-center text-2xl font-bold ${poppins.className}`}>SIGN UP</h1>
                        <Link href="/login">
                            <p className="text-center text-sm underline text-primary-orange-2 my-2">Returning User? Sign In Here</p>
                        </Link>
                        <form onSubmit={onHandleSubmit}>
                            <input type='text' name="username" placeholder="Username" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <input type='text' name="fname" placeholder="First Name" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <input type='text' name="lname" placeholder="Last Name" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <input type='email' name="email" placeholder="Email" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <input type='number' name="age" placeholder="Age" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <div className="flex justify-between gap-5">
                                <input type='password' name="password" placeholder="Password" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                                <input type='password' name="confirmPassword" placeholder="Confirm Password" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            </div>
                            <button type="submit" className="py-2 px-5 mt-5 bg-primary-orange-3 border-2 border-[#222] rounded-md">
                                {divState === 'loading' ? (
                                    <span>{loadingMessage}</span>
                                ) : (
                                    <span>Sign Up</span>
                                )}
                            </button>
                        </form>

                        {errState === 'error' && (
                            <div className="text-red-500 text-sm mt-2">{errMsg}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage;
