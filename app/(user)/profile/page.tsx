'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
// import { useAuthStore } from "@/app/store/store";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = getCookie('Auth');
        // const token = useAuthStore.getState().isAuthenticated;
        alert(token);
        if (!!!token) {  
            router.push('/login');
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
