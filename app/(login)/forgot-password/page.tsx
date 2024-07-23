'use client';

import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ForgotPasswordPage = () => {
    const router = useRouter();

    const [divState, setDivState] = useState('active');
    const [errState, setErrState] = useState('error-free');
    const [errMsg, setErrMsg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Sending Reset Link...');

    const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDivState("loading");

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;

        try {
            const response = await fetch('http://localhost:8080/user/forgot-password', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            if (response.ok) {
                setLoadingMessage('Reset Link Sent. Check Your Email.');
                setDivState('active');
                router.push(`/reset-password?email=${encodeURIComponent(email)}`);
            }
            if (response.status == 405) {
                setErrState('error');
                setErrMsg('Invalid email or email not found');
                setDivState('active');
            }
            else {
                setErrState('error');
                setErrMsg('Server error');
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
                        <h1 className={`text-center text-2xl font-bold ${poppins.className}`}>FORGOT PASSWORD</h1>
                        <Link href="/login">
                            <p className="text-center text-sm underline text-primary-orange-2 my-2">Remembered? Sign In Here</p>
                        </Link>
                        <form onSubmit={onHandleSubmit}>
                            <input type='email' name="email" placeholder="Email" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" />
                            <div className="flex justify-center">
                                <button type="submit" className="py-2 px-5 mt-5 bg-primary-orange-3 border-2 border-[#222] rounded-md">
                                    {divState === 'loading' ? (
                                        <span>{loadingMessage}</span>
                                    ) : (
                                        <span>Send OTP</span>
                                    )}
                                </button>
                            </div>
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

export default ForgotPasswordPage;
