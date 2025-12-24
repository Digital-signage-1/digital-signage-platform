'use client';

import { useState, Suspense } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import AuthBrandedSide from '@/components/auth/AuthBrandedSide';

function ConfirmForm() {
    const searchParams = useSearchParams();
    const initialUsername = searchParams.get('username') || '';

    const [username, setUsername] = useState(initialUsername);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const { confirmSignup } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await confirmSignup(username, code);
            router.push('/auth/sign-in');
        } catch (err) {
            setError('Invalid code');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AuthBrandedSide />

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="mb-8 lg:hidden">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">SignageOS</h1>
                        <p className="text-sm text-gray-500">Digital Signage Platform</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Account</h2>
                            <p className="text-sm text-gray-500">Enter the code sent to your email</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username / Email</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder-gray-400"
                                    placeholder="your@email.com"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all tracking-widest text-center text-2xl font-bold text-gray-900"
                                    placeholder="000000"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                />
                                <p className="text-xs text-gray-500 mt-2 text-center">Enter the 6-digit code</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                            >
                                Confirm
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-500">
                                Didn't receive the code?{' '}
                                <button className="text-blue-600 hover:text-blue-700 font-medium">
                                    Resend
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ConfirmPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen bg-gray-100 items-center justify-center">
                <div className="text-gray-500">Loading...</div>
            </div>
        }>
            <ConfirmForm />
        </Suspense>
    );
}
