'use client';

import { useRouter } from "next/navigation";
import { useEffect } from 'react';
// import { getCookie } from 'cookies-next';
import { useAuthStore } from "@/app/store/store";

const Page = () => {
    const { getIsAuthenticated } = useAuthStore((state) => ({
		getIsAuthenticated: state.getIsAuthenticated,
	  }));
    const router = useRouter();
    useEffect(() => {
        // const token = getCookie('Auth');  
        // console.log(token);
        if (!getIsAuthenticated()) {
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
