'use client';

import { useState, FormEvent, useEffect } from "react";

import Image from "next/image";

import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Link from "next/link";
import { getCookie } from "cookies-next";
// import { useAuthStore } from "@/app/store/store";

import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const LoginForm = () => {
	const stdWidth = 1200;
	const stdHeight = 1200;

	const { push } = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [divState, setDivState] = useState('active');
	const [errState, setErrState] = useState('error-free');
	const [errMsg, setErrMsg] = useState('');
	const [loadingMessage, setLoadingMessage] = useState('Logging In...')

	const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setDivState("loading");

		if (email.length === 0 || password.length === 0) {
			setErrState('error');
			setErrMsg('Please Fill The Required Fields');
			setDivState('active');
		} 

		else {
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
			console.log(response);
			if(response.ok){
				const returnedData = await response.json();	
				alert(returnedData);
				setLoadingMessage('Log In Successful. Redirecting...');
				// useAuthStore.setState({isAuthenticated: true});
				push('/profile');
			}
			else{
				setErrState('error');
				setErrMsg('Invalid Username or Password');
				setDivState('active');
			}
		}
	};

	return (
		<>
			<div className="h-screen text-white">
				<Image src="/login_page/login-group.png" alt="login collage" width={stdWidth} height={stdHeight} className="w-[90vw] h-[90vh] absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto"></Image>
				{
				divState === "active" 
				? 
				<div className="bg-[#000000E8] backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[45%] h-[90vh] px-20 py-10">
					<div className="text-2xl">
						<h1 className={`${poppins.className} font-bold`}>PHASE-R</h1>
						<h2 className={`${poppins.className}`}>Welcome Back!</h2>
					</div>
					<form className="mt-10 text-sm" onSubmit={onHandleSubmit}>
						<div className="flex gap-2 items-center border-b-2 border-dashed my-5">
							<Image src = "/login_page/login-form-icon.svg" alt = "mail icon" width={40} height={40}></Image>
							<input type="email" placeholder="johnson@gmail.com" value={email} onChange={(e) => {setEmail(e.target.value)}} className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white" />
						</div>

						<div className="flex gap-2 items-center border-b-2 border-dashed my-5">
							<Image src = "/login_page/login-form-icon.svg" alt = "mail icon" width={40} height={40}></Image>
							<input type="password" placeholder="Enter Password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="font-bold w-[100%] p-2 outline-none my-2 bg-transparent placeholder:text-white text-white" />
						</div>

						<div className={`${errState === 'error' ? 'block' : 'hidden'}`}>
							<h1 className="font-bold text-error-red">{errMsg}</h1>
						</div>
						<button type = "submit" className={`${montserrat.className} mt-10 group font-bold bg-transparent text-white border-2 border-white transition all ease-in-out hover:text-black hover:bg-white py-5 px-10 rounded-full flex items-center gap-2 mx-auto`}>Continue <span className="text-xl transition all ease-in-out group-hover:translate-x-1">&rarr;</span></button>
					</form>

					<div className={`flex justify-center items-center gap-5 text-center my-10 w-[100%] ${montserrat.className}`}>
						<div className="h-[1px] w-[100%] bg-line-white"></div>
						<p className="text-[10px]">OR</p>
						<div className="h-[1px] w-[100%] bg-line-white"></div>
					</div>

					<div className="flex justify-center items-center gap-10 my-10">
						<div className="border-2 rounded-full p-5 group transition all ease-in-out hover:bg-white hover:text-black">
							<GoogleIcon className="group-hover:scale-110" />
						</div>
						<div className="border-2 rounded-full p-5 group transition all ease-in-out hover:bg-white hover:text-black">
							<FacebookIcon className="group-hover:scale-110" />
						</div>
						<div className="border-2 rounded-full p-5 group transition all ease-in-out hover:bg-white hover:text-black">
							<AppleIcon className="group-hover:scale-110" />
						</div>
					</div>
					<div className="my-10">
						<h1>Do not have an account? <Link href = "/signup" className="font-bold text-md hover-underline-animation">Register Now</Link></h1>
					</div> 
				</div>
				:
				<div className="bg-[#000000E8] backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-[45%] h-[90vh] px-20 py-10">
					<h1>Loading</h1>
					<h2>{loadingMessage}</h2>
				</div>	
				}
			</div>
		</>
		);
};

export default LoginForm;