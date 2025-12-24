'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authService } from '@/services/auth.service';

const AuthContext = createContext();

// Helper to decode JWT without external library
const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const idToken = localStorage.getItem('id_token');
        if (accessToken && idToken) {
            const decoded = parseJwt(idToken);
            if (decoded) {
                setUser({
                    email: decoded.email,
                    given_name: decoded.given_name,
                    family_name: decoded.family_name,
                    sub: decoded.sub
                });
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const data = await authService.login(email, password);
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('id_token', data.id_token);
            localStorage.setItem('refresh_token', data.refresh_token);

            const decoded = parseJwt(data.id_token);
            setUser({
                email: decoded?.email || email,
                given_name: decoded?.given_name,
                family_name: decoded?.family_name,
                sub: decoded?.sub
            });
            router.push('/home');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        router.push('/auth/sign-in');
    };

    const signup = async (data) => {
        return await authService.signup(data);
    };

    const confirmSignup = async (username, code) => {
        return await authService.confirmSignup(username, code);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, signup, confirmSignup }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
