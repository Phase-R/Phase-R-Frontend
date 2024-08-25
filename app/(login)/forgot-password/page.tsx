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
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-[#00000099] backdrop-blur absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[50vh] h-[50vh] px-5 sm:px-10 md:px-15 lg:px-20 py-10">
                    <div className="text-xl sm:text-2xl">
                        <h1 className={`${poppins.className} font-bold text-center`}>FORGOT PASSWORD</h1>
                        <Link href="/login" className="text-center text-sm hover-underline-animation">
                            Return to Sign In?
                        </Link>
                    </div>
                    <form className="mt-10 text-xs sm:text-sm" onSubmit={onHandleSubmit}>
                        <div className="flex gap-2 items-center border-b-2 border-dashed my-5">
                            <Image src="/login_page/login-form-icon.svg" alt="mail icon" width={30} height={30} className="sm:w-[40px] sm:h-[40px]" />
                            <input
                                type="email"
                                placeholder="johnson@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition all ease-in-out hover:text-black hover:bg-white py-5 px-10 rounded-full flex items-center gap-2 mx-auto`}
                        >
                            Continue <span className="text-xl transition all ease-in-out group-hover:translate-x-1">&rarr;</span>
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

export default ForgotPasswordPage;
