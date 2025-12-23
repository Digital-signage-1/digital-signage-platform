'use client';

import { useState, Suspense } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';

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
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Verify Account</h1>
                <p className="text-sm text-gray-500 mt-2">Enter the code sent to your email</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username / Email</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none tracking-widest text-center text-lg"
                        placeholder="000000"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
}

export default function ConfirmPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmForm />
        </Suspense>
    )
}
