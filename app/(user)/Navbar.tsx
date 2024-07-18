"use client";
// import { useEffect, useState } from 'react';
// import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from '../store/store';
import { deleteCookie } from 'cookies-next';

export default function Navbar() {
    const { push } = useRouter();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { setIsAuthenticated, getIsAuthenticated } = useAuthStore((state) => ({
		setIsAuthenticated: state.setIsAuthenticated,
		getIsAuthenticated: state.getIsAuthenticated,
	  }));

    const handleLogout = () => {
        console.log('Logging out');
        deleteCookie('Auth');
        setIsAuthenticated(false);
        // redirect('/login');
        push('/login');
    };
    const handleLogin=()=>{     
        if(getIsAuthenticated()){
            // redirect('/profile')
            push("/profile")
        }
        else{
            // redirect('/login')
            push("/login")
        }
    }
    return (
        <nav className="flex xl:justify-end p-4 sm:justify-center">
            <Link href="/services" className='xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 lg:h-10 lg:rounded-md xs:text-blue-600 sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer'>
                Services
            </Link>
            <Link href="/about" className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer">
                About us
            </Link>
            <Link href="/store" className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer">
                Store
            </Link>
            {getIsAuthenticated() ? (
                <Link href="/" onClick={handleLogout} className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 lg:h-10 lg:rounded-md xs:text-blue-600 sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer">
                Logout
                </Link>
            ) : (
                <Link href="/login" onClick={handleLogin}className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer">
                    Login
                </Link>
            )}
        </nav>
    );
}
