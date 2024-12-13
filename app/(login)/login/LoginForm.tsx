'use client';

import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { Poppins, Montserrat } from "next/font/google";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import { useAuthStore } from "@/app/store/store";
import { useRouter } from "next/navigation";
import FlipCard from "@/components/ui/flipcard";
import { FaKaaba } from "react-icons/fa";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const LoginForm = () => {
	const questions = ["where are u", "wyd"]

	const { setIsAuthenticated, getIsAuthenticated } = useAuthStore((state) => ({
		setIsAuthenticated: state.setIsAuthenticated,
		getIsAuthenticated: state.getIsAuthenticated,
	}));

	const { push } = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [divState, setDivState] = useState('active');
	const [errState, setErrState] = useState('error-free');
	const [errMsg, setErrMsg] = useState('');
	const [loadingMessage, setLoadingMessage] = useState('Logging In...');

	useEffect(() => {
		if (getIsAuthenticated()) {
			push('/profile');
		}
	}, [getIsAuthenticated, push]);

	const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setDivState("loading");

		if (email.length === 0 || password.length === 0) {
			setErrState('error');
			setErrMsg('Please Fill The Required Fields');
			setDivState('active');
		} else {
			try {
				const response = await fetch('https://api.phase-r.fit/user/login', {
					method: 'POST',
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include'
				});

				const data = await response.json();

				if (response.ok) {
					setLoadingMessage('Log In Successful. Redirecting...');
					setIsAuthenticated(true);
					push('/profile');
				  } else if (response.status === 405) {
					// Handle specific error for email not verified
					setErrState('error');
					setErrMsg(data.message || 'Email not verified. Please verify your email.');
					setDivState('active');
				  } else {
					setErrState('error');
					setErrMsg(data.message || 'An error occurred during login');
					setDivState('active');
				  }
				} catch (error) {
				  console.error('Login error:', error);
				  setErrState('error');
				  setErrMsg('An unexpected error occurred. Please try again.');
				  setDivState('active');
				}
		}
	};

	return (
		<>
			{/*adjust the container size for medium screens(i pad), adjust margin bottom and remove scrollbar for large screens*/}
			<div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{divState === "active" ? (
					<div className="flex justify-center items-center w-full h-full">
						<div className="bg-[#00000099] backdrop-blur w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 rounded-lg mt-16 md:mt-10 lg:mt-12 mb-6 md:mb-8 lg:mb-10">
							<div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-6 text-white">
								<h1 className={`${poppins.className} font-bold`}>PHASE-R</h1>
								<h2 className={`${poppins.className} text-sm sm:text-base`}>Welcome Back!</h2>
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

								<div className="flex gap-2 items-center border-b-2 border-dashed my-4 sm:my-5">
									<div className="w-[30px] h-[30px] flex items-center justify-center transform scale-75">
										<RiLockPasswordLine className="text-white w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
									</div>
									<input
										type="password"
										placeholder="Enter Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="font-bold w-full p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
									/>
								</div>

								<div className={`${errState === 'error' ? 'block' : 'hidden'}`}>
									<h1 className="font-bold text-red-500 text-xs sm:text-sm">{errMsg}</h1>
								</div>
								<button
									type="submit"
									className={`${montserrat.className} mt-8 group font-bold bg-transparent text-white border-2 border-white transition-all ease-in-out hover:text-black hover:bg-white py-3 px-5 rounded-full flex items-center gap-2 mx-auto`}
								>
									Continue <span className="text-lg transition-all ease-in-out group-hover:translate-x-1">&rarr;</span>
								</button>
							</form>

							<div className={`flex justify-center items-center gap-5 text-center my-8 w-full ${montserrat.className} text-white`}>
								<div className="h-[1px] w-full bg-line-white"></div>
								<p className="text-[9px] sm:text-[10px]">OR</p>
								<div className="h-[1px] w-full bg-line-white"></div>
							</div>

							<div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 my-8">
								<div className="border-2 border-white rounded-full p-3 sm:p-4 md:p-5 group transition-all ease-in-out hover:bg-white text-white hover:text-black">
									<GoogleIcon className="group-hover:scale-110" />
								</div>
								<div className="border-2 border-white rounded-full p-3 sm:p-4 md:p-5 group transition-all ease-in-out hover:bg-white text-white hover:text-black">
									<FacebookIcon className="group-hover:scale-110" />
								</div>
								<div className="border-2 border-white rounded-full p-3 sm:p-4 md:p-5 group transition-all ease-in-out hover:bg-white text-white hover:text-black">
									<AppleIcon className="group-hover:scale-110" />
								</div>
							</div>
							<div className="my-8 text-center text-white">
								<h1>
									Do not have an account?{' '}
									<Link href="/signup" className="font-bold text-sm hover-underline-animation">
										Register Now
									</Link>
								</h1>
								<h1>
									Forgot password?{' '}
									<Link href="/forgot-password" className="font-bold text-sm hover-underline-animation">
										Click here
									</Link>
								</h1>
							</div>
						</div>
					</div>
				) : (
					<div className="bg-[#000000E8] backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-full max-w-lg px-8 py-6 rounded-lg flex flex-col items-center justify-center text-white">
						<h1>Loading</h1>
						<h2>{loadingMessage}</h2>
					</div>
				)}
			</div>
		</>
	);

};

export default LoginForm;
