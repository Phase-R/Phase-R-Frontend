'use client';
import Link from "next/link";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const [divState, setDivState] = useState('active');
    const [errState, setErrState] = useState('error-free');
    const [errMsg, setErrMsg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('Sending Reset Link...');

    const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDivState("loading");

        try {
            const response = await fetch('https://api.phase-r.fit/user/forgot-password', {
                method: 'POST',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setLoadingMessage('Reset Link Sent. Check Your Email.');
                setDivState('active');
                router.push(`/reset-password?email=${encodeURIComponent(email)}`);
            } else if (response.status === 405) {
                setErrState('error');
                setErrMsg('Invalid email or email not found');
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


    return (
        <>
            <div className="relative min-h-screen bg-cover bg-center bg-fixed">
                <video 
                src="/login_page/signup_page_bg_vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}>
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-[#00000099] backdrop-blur w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 rounded-lg mb-6 md:mb-8 lg:mb-10">
                        <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6 text-center">
                            <h1 className={`${poppins.className} font-bold`}>FORGOT PASSWORD</h1>
                            <Link href="/login" className="text-sm hover-underline-animation text-center">
                                Return to Sign In?
                            </Link>
                        </div>
                        <form className="mt-8 text-xs sm:text-xs md:text-sm" onSubmit={onHandleSubmit}>
                            <div className="flex gap-2 items-center border-b-2 border-dashed my-4 sm:my-5">
                                <Image
                                    src="/login_page/login-form-icon.svg"
                                    alt="mail icon"
                                    width={30}
                                    height={30}
                                    className="sm:w-[35px] sm:h-[35px]"
                                />
                                <input
                                    type="email"
                                    placeholder="johnson@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                            <div className="text-red-500 text-sm mt-2">{errMsg}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPasswordPage;
