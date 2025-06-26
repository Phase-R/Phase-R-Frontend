"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from '../store/store';
import { deleteCookie } from 'cookies-next';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const { push } = useRouter();
    const { setIsAuthenticated, getIsAuthenticated } = useAuthStore((state) => ({
        setIsAuthenticated: state.setIsAuthenticated,
        getIsAuthenticated: state.getIsAuthenticated,
    }));

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const renderAuthButton = () => {
        if (!isClient) return null; // Don't render anything on the server

        return getIsAuthenticated() ? (
            <button
                onClick={handleLogout}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-white bg-black"
            >
                Logout
            </button>
        ) : (
            <button
                onClick={handleLogin}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-white bg-black"
            >
                Login
            </button>
        );
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/" className="text-white font-bold text-xl">
                        <div className='flex items-center'>
                            <img src="/landing_page/Logo.jpg" alt="Phase-R" className="w-12 h-12 md:w-16 md:h-16 mr-2 rounded-full" />
                            Phase-R
                        </div>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            type="button"
                            className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/services" className="text-base font-medium text-white hover:text-gray-300">
                            Services
                        </Link>
                        <Link href="/#about" className="text-base font-medium text-white hover:text-gray-300">
                            About us
                        </Link>
                        <Link href="/store" className="text-base font-medium text-white hover:text-gray-300">
                            Store
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {renderAuthButton()}
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on mobile menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Services
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        About us
                    </Link>
                    <Link href="/store" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Store
                    </Link>
                    {isClient && (getIsAuthenticated() ? (
                        <button
                            onClick={handleLogout}
                            className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Login
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
