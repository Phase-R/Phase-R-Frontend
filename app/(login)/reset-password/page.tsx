'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ResetPasswordPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    const [divState, setDivState] = useState('active');
    const [errState, setErrState] = useState('error-free');
    const [errMsg, setErrMsg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Resetting Password...');
    const [otpRegenerateMsg, setOtpRegenerateMsg] = useState('');

    const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDivState("loading");

        const formData = new FormData(event.currentTarget);
        const otp = formData.get('otp') as string;
        const newPassword = formData.get('newPassword') as string;
        const confirmNewPassword = formData.get('confirmNewPassword') as string;

        if (newPassword !== confirmNewPassword) {
            setErrState('error');
            setErrMsg('Passwords do not match');
            setDivState('active');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/user/reset-password', {
                method: 'POST',
                body: JSON.stringify({ email, otp, newPassword }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setLoadingMessage('Password Reset Successful. Redirecting to Login...');
                setDivState('active');
                router.push('/login');
            }
            else if (response.status == 405) {
                setErrState('error');
                setErrMsg('Invalid OTP, click to regenerate OTP');
                setDivState('active');
            }
            else if (response.status == 401) {
                setErrState('error');
                setErrMsg('Cannot reset same password, click to regenerate OTP');
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

    const onHandleRegenerateOtp = async () => {
        setOtpRegenerateMsg('Regenerating OTP...');
        try {
            const response = await fetch('http://localhost:8080/user/forgot-password', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setOtpRegenerateMsg('OTP has been regenerated. Please check your email.');
            } else {
                setOtpRegenerateMsg('Failed to regenerate OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setOtpRegenerateMsg('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className="absolute z-20 left-0 right-0 mx-auto">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-[350px] md:w-[500px] bg-primary-black-3 mx-auto shadow-md shadow-[#222] p-5">
                        <h1 className={`text-center text-2xl font-bold ${poppins.className}`}>RESET PASSWORD</h1>
                        <form onSubmit={onHandleSubmit}>
                            <input type='text' name="otp" placeholder="OTP" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" required />
                            <input type='password' name="newPassword" placeholder="New Password" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" required />
                            <input type='password' name="confirmNewPassword" placeholder="Confirm New Password" className="w-[100%] bg-primary-black-2 p-2 mt-5 rounded-md text-white placeholder:text-primary-orange-2 outline-none" required />
                            <div className="flex justify-center">
                                <button type="submit" className="py-2 px-5 mt-5 bg-primary-orange-3 border-2 border-[#222] rounded-md">
                                    {divState === 'loading' ? (
                                        <span>{loadingMessage}</span>
                                    ) : (
                                        <span>Reset Password</span>
                                    )}
                                </button>
                            </div>
                        </form>

                        {errState === 'error' && (
                            <div className="text-red-500 text-sm mt-2">{errMsg}</div>
                        )}
                        <div className="text-center mt-2">
                            <button onClick={onHandleRegenerateOtp} className="underline text-primary-orange-2">
                                Regenerate OTP
                            </button>
                            {otpRegenerateMsg && (
                                <div className="text-primary-orange-2 text-sm mt-2">{otpRegenerateMsg}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordPage;
