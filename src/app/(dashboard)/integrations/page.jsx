'use client';

import Link from 'next/link';

const INTEGRATIONS = [
    { id: 'google-cal', name: 'Google Calendar', desc: 'Sync events to your display', status: 'Active', color: 'bg-green-100 text-green-700' },
    { id: 'weather', name: 'Weather API', desc: 'Show local weather updates', status: 'Inactive', color: 'bg-gray-100 text-gray-600' },
    { id: 'twitter', name: 'Twitter / X', desc: 'Display latest tweets', status: 'Active', color: 'bg-green-100 text-green-700' },
    { id: 'powerbi', name: 'Power BI', desc: 'Secure dashboard visualization', status: 'Inactive', color: 'bg-gray-100 text-gray-600' },
    { id: 'slack', name: 'Slack', desc: 'Internal messaging ticker', status: 'Coming Soon', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'rss', name: 'RSS Feed', desc: 'Custom news feeds', status: 'Active', color: 'bg-green-100 text-green-700' },
];

export default function IntegrationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Request Integration
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INTEGRATIONS.map((app) => (
                    <div key={app.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
                                {app.name.charAt(0)}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${app.color}`}>
                                {app.status}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-1">{app.name}</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-1">{app.desc}</p>

                        <Link
                            href={`/integrations/${app.id}`}
                            className="w-full block text-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 font-medium text-sm transition-colors"
                        >
                            Manage
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
