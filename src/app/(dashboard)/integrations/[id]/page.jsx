'use client';

import { useParams } from 'next/navigation';

export default function IntegrationDetailPage() {
    const { id } = useParams();

    // Mock data based on ID
    const title = id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Integration';

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl font-bold text-gray-500">
                        {title.charAt(0)}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                        <div className="flex items-center mt-1 space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-sm text-gray-500">Active Connection</span>
                        </div>
                    </div>
                </div>
                <button className="px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-md text-sm font-medium">
                    Disconnect
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Config */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Configuration</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
                                <div className="flex space-x-2">
                                    <input
                                        type="password"
                                        value="sk_live_51M..."
                                        readOnly
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                    />
                                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 text-sm">Update</button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">OAuth Authorization</label>
                                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white">
                                    <span className="text-sm font-medium">Re-authorize with Provider</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Diagnostics</h2>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm">
                            Test Connection
                        </button>
                    </div>
                </div>

                {/* Right Column: Status */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Status Overview</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Connection</span>
                                <span className="text-green-600 font-medium">Healthy</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Last Sync</span>
                                <span className="text-gray-900">2 mins ago</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Errors (24h)</span>
                                <span className="text-gray-900">0</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Data Sources</h2>
                        <ul className="space-y-2">
                            {['Main Calendar', 'Holiday Schedule', 'Team Birthdays'].map((source, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-700">
                                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    {source}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
