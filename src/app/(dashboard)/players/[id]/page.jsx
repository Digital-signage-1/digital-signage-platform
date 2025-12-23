'use client';

import { useParams } from 'next/navigation';

export default function PlayerDetailPage() {
    const { id } = useParams();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center space-x-3">
                        <h1 className="text-2xl font-bold text-gray-900">Player #{id}</h1>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Online</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Lobby Screen 1 • Android • NYC HQ</p>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-md text-sm font-medium">Restart</button>
                    <button className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 rounded-md text-sm font-medium text-red-600">Stop</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Screenshot</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Now Playing */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Now Playing</h3>
                        <div className="flex items-center space-x-4">
                            <div className="w-32 h-20 bg-gray-900 rounded flex items-center justify-center">
                                <span className="text-white text-xs">Thumbnail</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Welcome Video 2024.mp4</p>
                                <p className="text-sm text-gray-500">Duration: 00:30 • Channel: Lobby A</p>
                                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>0:13</span>
                                    <span>0:30</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Schedule */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Upcoming Schedule</h3>
                        <div className="space-y-3">
                            {[
                                { time: '10:00 AM', event: 'Corporate Updates' },
                                { time: '10:15 AM', event: 'Local Weather' },
                                { time: '10:16 AM', event: 'Social Media Feed' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                                    <div className="w-20 text-sm text-gray-500">{item.time}</div>
                                    <div className="font-medium text-gray-900">{item.event}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Map */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-64 flex flex-col">
                        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Location</h3>
                        <div className="flex-1 bg-gray-100 rounded border border-dashed border-gray-300 flex items-center justify-center">
                            <span className="text-gray-400">Map Visualization Placeholder</span>
                        </div>
                    </div>

                    {/* Device Info */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Device Info</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-gray-500 block">IP Address</span>
                                <span className="text-gray-900 font-medium">192.168.1.105</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">MAC Address</span>
                                <span className="text-gray-900 font-medium">00:1B:44:11:3A:B7</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">App Version</span>
                                <span className="text-gray-900 font-medium">v2.4.1</span>
                            </div>
                            <div>
                                <span className="text-gray-500 block">Storage</span>
                                <span className="text-gray-900 font-medium">8.2 GB / 32 GB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
