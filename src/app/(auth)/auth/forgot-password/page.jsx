'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API here
        setSent(true);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
                <p className="text-sm text-gray-500 mt-2">Enter your email to receive a reset link</p>
            </div>

            {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                    >
                        Send Reset Link
                    </button>
                </form>
            ) : (
                <div className="text-center space-y-4">
                    <div className="text-green-600 font-medium">Check your email!</div>
                    <p className="text-sm text-gray-500">We sent a password reset link to {email}</p>
                </div>
            )}

            <div className="mt-6 text-center text-sm">
                <Link href="/auth/sign-in" className="font-medium text-blue-600 hover:text-blue-500">
                    Back to Sign In
                </Link>
            </div>
        </div>
    );
}
