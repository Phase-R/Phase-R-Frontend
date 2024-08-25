'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Poppins, Montserrat } from "next/font/google";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePassword } from "react-icons/md";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ResetPasswordPage = () => {
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
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-[#00000099] backdrop-blur absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[80vh] px-5 sm:px-10 md:px-15 lg:px-20 py-10">
                <div className="text-xl sm:text-2xl">
                    <h1 className={`${poppins.className}font-bold text-white`}>RESET PASSWORD</h1>
                    <Link href="/login" className="text-sm text-white hover-underline-animation">
                        Return to Sign In?
                    </Link>
                </div>
                <form className="mt-10 text-xs sm:text-sm w-full" onSubmit={onHandleSubmit}>
                    <div className="flex gap-2 items-center border-b-2 border-dashed border-white my-5">
                        <MdOutlinePassword className="text-white sm:w-[40px] sm:h-[40px]" />
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                        />
                    </div>
                    <div className="flex gap-2 items-center border-b-2 border-dashed border-white my-5">
                        <RiLockPasswordLine className="text-white sm:w-[40px] sm:h-[40px]" />
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                        />
                    </div>
                    <div className="flex gap-2 items-center border-b-2 border-dashed border-white my-5">
                        <RiLockPasswordLine className="text-white sm:w-[40px] sm:h-[40px]" />
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
                        className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition-all ease-in-out hover:text-black hover:bg-white py-5 px-10 rounded-full flex items-center gap-2 mx-auto`}
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

    );
};

export default ResetPasswordPage;
