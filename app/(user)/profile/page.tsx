'use client';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";


const Page = () => {
    const { push } = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            push('/login');
        }
    }, []); 
    return (
        <>
            <div className="h-screen">
                <h1>Profile Page</h1>
                {/* <div>{email}</div> */}
            </div>
        </>
    );
};

export default Page;
