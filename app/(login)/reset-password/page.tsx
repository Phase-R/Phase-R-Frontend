'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, FormEvent, Suspense } from 'react';
import { Poppins, Montserrat } from "next/font/google";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePassword } from "react-icons/md";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ResetPasswordPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchParamsComponent />
        </Suspense>
    );
};

const SearchParamsComponent = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const email = searchParams?.get('email') || '';

    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [divState, setDivState] = useState('active');
    const [errState, setErrState] = useState('error-free');
    const [errMsg, setErrMsg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Resetting Password...');
    const [otpRegenerateMsg, setOtpRegenerateMsg] = useState('');

    const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDivState("loading");

        if (newPassword !== confirmNewPassword) {
            setErrState('error');
            setErrMsg('Passwords do not match');
            setDivState('active');
            return;
        }

        try {
            const response = await fetch('https://api.phase-r.fit/user/reset-password', {
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
            } else if (response.status === 405) {
                setErrState('error');
                setErrMsg('Invalid OTP, click to regenerate OTP');
                setDivState('active');
            } else if (response.status === 401) {
                setErrState('error');
                setErrMsg('Cannot reset the same password, click to regenerate OTP');
                setDivState('active');
            } else {
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
        <div
            className="relative min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/login_page/login-4.png')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="bg-[#00000099] backdrop-blur w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 rounded-lg mb-6 md:mb-8 lg:mb-10">
                    <h1 className={`${poppins.className} font-bold text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
                        RESET PASSWORD
                    </h1>
                    <Link href="/login" className="block text-sm text-white text-center hover-underline-animation">
                        Return to Sign In?
                    </Link>
                    <form className="w-full max-w-md mt-6" onSubmit={onHandleSubmit}>
                        <div className="flex gap-2 items-center border-b-2 border-dashed my-4 sm:my-5">
                            <div className="w-[30px] h-[30px] flex items-center justify-center transform scale-75">
                                <MdOutlinePassword className="text-white w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                            />
                        </div>
                        <div className="flex gap-2 items-center border-b-2 border-dashed my-4 sm:my-5">
                            <div className="w-[30px] h-[30px] flex items-center justify-center transform scale-75">
                                <RiLockPasswordLine className="text-white w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
                            </div>
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                            />
                        </div>
                        <div className="flex gap-2 items-center border-b-2 border-dashed my-4 sm:my-5">
                            <div className="w-[30px] h-[30px] flex items-center justify-center transform scale-75">
                                <RiLockPasswordLine className="text-white w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
                            </div>
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition-all ease-in-out hover:text-black hover:bg-white py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-full flex items-center gap-2 mx-auto`}
                        >
                            Continue <span className="text-xl transition-all ease-in-out group-hover:translate-x-1">&rarr;</span>
                        </button>
                    </form>

                    {errState === 'error' && (
                        <div className="text-red-500 text-sm mt-2 text-center">{errMsg}</div>
                    )}
                    <div className="text-center mt-4">
                        <button onClick={onHandleRegenerateOtp} className="hover-underline-animation text-white">
                            Regenerate OTP
                        </button>
                        {otpRegenerateMsg && (
                            <div className="mt-2 text-white">{otpRegenerateMsg}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
