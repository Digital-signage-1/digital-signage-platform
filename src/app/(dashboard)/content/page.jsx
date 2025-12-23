'use client';

import Link from 'next/link';

const TABS = ['All', 'Images', 'Videos', 'Dashboards', 'Feeds', 'Playlists'];

const CONTENT_ITEMS = [
    { id: 1, name: 'Lobby Welcome', type: 'Video', source: 'Upload', updated: '2h ago', used: '2 Channels' },
    { id: 2, name: 'Lunch Menu', type: 'Image', source: 'Canva', updated: '5h ago', used: 'Cafeteria' },
    { id: 3, name: 'Sales Dashboard', type: 'Dashboard', source: 'PowerBI', updated: '1d ago', used: 'Sales Floor' },
    { id: 4, name: 'CNN Feed', type: 'Feed', source: 'RSS', updated: 'Live', used: 'All Screens' },
];

export default function ContentPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Content Library</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Add Content
                </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {TABS.map((tab, i) => (
                        <button
                            key={tab}
                            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${i === 0
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Table */}
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Used In</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {CONTENT_ITEMS.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-16 bg-gray-200 rounded mr-4 flex-shrink-0"></div>
                                        <span className="font-medium text-gray-900">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.source}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.updated}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.used}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/content/${item.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">Edit</Link>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
