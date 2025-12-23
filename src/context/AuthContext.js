'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authService } from '@/services/auth.service'; // Adjust path if needed

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check local storage for tokens on load
        const token = localStorage.getItem('access_token');
        if (token) {
            // Validate token or just assume logged in for wireframe
            setUser({ email: 'user@example.com' }); // Mock user decoding
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const data = await authService.login(email, password);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            setUser({ email });
            router.push('/home');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        router.push('/auth/sign-in');
    };

    const signup = async (data) => {
        await authService.signup(data);
    };

    const confirmSignup = async (username, code) => {
        await authService.confirmSignup(username, code);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, signup, confirmSignup }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
