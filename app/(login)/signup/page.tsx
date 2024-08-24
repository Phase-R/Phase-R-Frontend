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
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="bg-[#000000CC] backdrop-blur absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[80vh] sm:h-[85vh] md:h-[90vh] px-5 sm:px-10 md:px-15 lg:px-20 py-10">
                    <div className="text-xl sm:text-2xl">
                        <h1 className={`${poppins.className} font-bold text-center`}>SIGN UP</h1>
                        <Link href="/login" className="text-center text-sm hover-underline-animation">
                            Return to Sign In?
                        </Link>
                    </div>
                    <form className="mt-10 text-xs sm:text-sm" onSubmit={onHandleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                        />
                        <input
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                        />
                        <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                        />
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                        />
                        <div className="flex justify-between gap-5">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white border border-[rgba(255,255,255,0.2)] rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition all ease-in-out hover:text-black hover:bg-white py-5 px-10 rounded-full flex items-center gap-2 mx-auto`}
                        >
                            Sign Up <span className="text-xl transition all ease-in-out group-hover:translate-x-1">&rarr;</span>
                        </button>
                    </form>

                    {errState === 'error' && (
                        <div className="text-red-500 text-sm mt-2">{errMsg}</div>
                    )}
                </div>
            </div>


        </>
    )
}

export default SignupPage;
