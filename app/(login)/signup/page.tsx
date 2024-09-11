'use client';

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { Poppins, Montserrat } from "next/font/google";
import { useRouter } from 'next/navigation';
import { getCookie } from "cookies-next";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


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
            else if (response.status === 409) {
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
            <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-[#00000099] backdrop-blur w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 rounded-lg mb-6 md:mb-8 lg:mb-10 mt-4">
                        <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6 text-center">
                            <h1 className={`${poppins.className} font-bold text-white`}>SIGN UP</h1>
                            <Link href="/login" className="text-sm text-white hover-underline-animation">
                                Return to Sign In?
                            </Link>
                        </div>
                        <form className="mt-8 text-xs sm:text-xs md:text-sm" onSubmit={onHandleSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <input
                                type="text"
                                name="fname"
                                placeholder="First Name"
                                className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <input
                                type="text"
                                name="lname"
                                placeholder="Last Name"
                                className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <input
                                type="text"
                                name="age"
                                placeholder="Age"
                                className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="font-bold w-full p-2 outline-none my-1 sm:my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`${montserrat.className} mt-6 sm:mt-8 group font-bold bg-transparent text-white border-2 border-white transition-all ease-in-out hover:text-black hover:bg-white py-4 sm:py-5 px-8 sm:px-10 text-xs sm:text-sm rounded-full flex items-center gap-2 mx-auto`}
                            >
                                Sign Up <span className="text-lg sm:text-xl transition-all ease-in-out group-hover:translate-x-1">&rarr;</span>
                            </button>
                        </form>

                        {errState === 'error' && (
                            <div className="text-red-500 text-sm mt-2 text-center">{errMsg}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

}

export default SignupPage;
