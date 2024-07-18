import { log } from 'console';
import { create } from 'zustand';

interface User {
    username: string;
    fname: string;
    lname: string;
    email: string;
    age: number;
}

interface AuthResponse {
    user: User;
    token: string;
    isVerified?: boolean;
}

interface AuthStore {
    user: User | null;
    token: string | null;
    isAuth: boolean;
    error: string | null;
    isLoading: boolean;
    isVerified: boolean;
    signup: (userData: User) => Promise<void>;
    login: (username: string, password: string) => Promise<void>;
    verify: (token: string) => Promise<void>;
    logout: () => void;
}