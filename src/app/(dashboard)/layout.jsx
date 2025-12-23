'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const NAV_ITEMS = [
    { href: '/home', label: 'Home' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/content', label: 'Content' },
    { href: '/apps', label: 'Apps Builder' },
    { href: '/channels', label: 'Channels' },
    { href: '/players', label: 'Players' },
    { href: '/schedules', label: 'Schedules' },
];

export default function DashboardLayout({ children }) {
    const pathname = usePathname();
    const { logout, user } = useAuth();

    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-sm flex flex-col fixed h-full">
                    <div className="h-16 flex items-center px-6 border-b">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            SignageOS
                        </span>
                    </div>

                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t bg-gray-50">
                        <div className="mb-3 px-2">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">User</p>
                            <p className="text-sm text-gray-700 truncate">{user?.email || 'User'}</p>
                        </div>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Sign Out
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    );
}
