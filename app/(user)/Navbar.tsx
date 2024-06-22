"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navbar() {
    const { push } = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userToken = localStorage.getItem('userToken');
            setIsLoggedIn(!!userToken);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        push('/');
        setIsLoggedIn(false);
    };
    const handleLogin=()=>{
        if(isLoggedIn){
            push("/profile")
        }
        else{
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
            {isLoggedIn ? (
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
