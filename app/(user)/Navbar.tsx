"use client";
import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from '../store/store';
import { deleteCookie } from 'cookies-next';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const { push } = useRouter();
    const { setIsAuthenticated, getIsAuthenticated } = useAuthStore((state) => ({
        setIsAuthenticated: state.setIsAuthenticated,
        getIsAuthenticated: state.getIsAuthenticated,
    }));

    const handleLogout = () => {
        deleteCookie('Auth');
        setIsAuthenticated(false);
        push('/login');
    };

    const handleLogin = () => {
        if (getIsAuthenticated()) {
            push("/profile");
        } else {
            push("/login");
        }
    };

    return (
        <header className="relative z-40 w-full h-16 bg-black-500 flex items-center justify-between px-4">
            {/* Hamburger Button (visible on small screens) */}
            <div className="block md:hidden">
                <div className="relative">
                    {/* Sidebar */}
                    <nav className={`fixed top-0 left-0 h-full bg-gray-800 z-20 transition-all duration-1000 ${isOpen ? 'w-2/3 opacity-100' : 'w-0 opacity-0'}`}>
                        <ul className="mt-24 ml-12 space-y-8 text-white text-lg">
                            <li><Link href="/services" className="hover:underline">Services</Link></li>
                            <li><Link href="/about" className="hover:underline">About us</Link></li>
                            <li><Link href="/store" className="hover:underline">Store</Link></li>
                            {getIsAuthenticated() ? (
                                <li><Link href="/" onClick={handleLogout} className="hover:underline">Logout</Link></li>
                            ) : (
                                <li><Link href="/login" onClick={handleLogin} className="hover:underline">Login</Link></li>
                            )}
                        </ul>
                    </nav>

                    {/* Hamburger Button */}
                    <div className="relative z-30 flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all hover:bg-gray-300 hover:bg-opacity-20 duration-200 shadow-md cursor-pointer" onClick={handleClick}>
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10 opacity-0' : 'opacity-100'}`}></div>
                            <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-x-10 opacity-0 delay-75' : 'opacity-100'}`}></div>
                            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10 opacity-0 delay-150' : 'opacity-100'}`}></div>
                            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${isOpen ? 'translate-x-0 opacity-100 w-7' : '-translate-x-10 opacity-0 w-0'}`}>
                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isOpen ? 'rotate-45 delay-300' : 'rotate-0'}`}></div>
                                <div className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${isOpen ? '-rotate-45 delay-300' : 'rotate-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regular Navbar (visible on medium and large screens) */}
            <nav className="hidden md:flex xl:justify-end p-4 sm:justify-center w-full">
                <Link
                    href="/services"
                    className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 lg:h-10 lg:rounded-md xs:text-blue-600 sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer"
                >
                    Services
                </Link>
                <Link
                    href="/about"
                    className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer"
                >
                    About us
                </Link>
                <Link
                    href="/store"
                    className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer"
                >
                    Store
                </Link>
                {getIsAuthenticated() ? (
                    <Link
                        href="/"
                        onClick={handleLogout}
                        className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 lg:h-10 lg:rounded-md xs:text-blue-600 sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer"
                    >
                        Logout
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        onClick={handleLogin}
                        className="xl:h-15 text-sm xl:text-xl sm:text-lg sm:w-1/7 sm:h-10 sm:rounded-md sm:my-2 sm:mx-8 px-4 py-2 text-white font-bold cursor-pointer"
                    >
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
}
