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

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const LoginForm = () => {
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
			const response = await fetch('http://localhost:8080/user/login', {
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

			if (response.ok) {
				setLoadingMessage('Log In Successful. Redirecting...');
				setIsAuthenticated(true);
				push('/profile');
			} else {
				setErrState('error');
				setErrMsg('Invalid Username or Password');
				setDivState('active');
			}
		}
	};

	return (
		<div className="h-screen text-white">
			{divState === "active" ? (
				<div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/login_page/login-4.png')" }}>
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="bg-[#00000099] backdrop-blur absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] h-[85vh] lg:h-[90vh] px-5 sm:px-10 md:px-15 lg:px-20 py-10">
						<div className="text-xl sm:text-2xl">
							<h1 className={`${poppins.className} font-bold`}>PHASE-R</h1>
							<h2 className={`${poppins.className}`}>Welcome Back!</h2>
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

							<div className="flex gap-2 items-center border-b-2 border-dashed my-5">
								<div className="w-[35px] h-[35px] flex items-center justify-center transform scale-75">
									<RiLockPasswordLine className="text-white w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] h-[60px]" />
								</div>
								<input
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white"
								/>
							</div>

							<div className={`${errState === 'error' ? 'block' : 'hidden'}`}>
								<h1 className="font-bold text-error-red">{errMsg}</h1>
							</div>
							<button
								type="submit"
								className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition all ease-in-out hover:text-black hover:bg-white py-5 px-10 rounded-full flex items-center gap-2 mx-auto`}
							>
								Continue <span className="text-xl transition all ease-in-out group-hover:translate-x-1">&rarr;</span>
							</button>
						</form>

						<div className={`flex justify-center items-center gap-5 text-center my-10 w-[100%] ${montserrat.className}`}>
							<div className="h-[1px] w-[100%] bg-line-white"></div>
							<p className="text-[10px]">OR</p>
							<div className="h-[1px] w-[100%] bg-line-white"></div>
						</div>

						<div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-10 my-10">
							<div className="border-2 rounded-full p-3 sm:p-4 md:p-5 group transition all ease-in-out hover:bg-white hover:text-black">
								<GoogleIcon className="group-hover:scale-110" />
							</div>
							<div className="border-2 rounded-full p-3 sm:p-4 md:p-5 group transition all ease-in-out hover:bg-white hover:text-black">
								<FacebookIcon className="group-hover:scale-110" />
							</div>
							<div className="border-2 rounded-full p-3 sm:p-4 md:p-5 group transition all ease-in-out hover:bg-white hover:text-black">
								<AppleIcon className="group-hover:scale-110" />
							</div>
						</div>
						<div className="my-10">
							<h1>
								Do not have an account?{' '}
								<Link href="/signup" className="font-bold text-md hover-underline-animation">
									Register Now
								</Link>
							</h1>
							<h1>
								Forgot password?{' '}
								<Link href="/forgot-password" className="font-bold text-md hover-underline-animation">
									Click here
								</Link>
							</h1>
						</div>
					</div>
				</div>


			) : (
				<div className="bg-[#000000E8] backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[45%] h-[90vh] px-20 py-10">
					<h1>Loading</h1>
					<h2>{loadingMessage}</h2>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
