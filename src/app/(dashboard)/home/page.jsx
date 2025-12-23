'use client';

export default function HomePage() {
    return (
        <div className="space-y-6">
            {/* Section 1: Subscription Warning Banner */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center">
                    <span className="text-yellow-700 font-medium">
                        ⚠️ This account does not have an active subscription. Players will not play content.
                    </span>
                </div>
                <div className="space-x-3">
                    <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded-md shadow-sm">
                        Start Subscription
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md shadow-sm">
                        Upgrade Plan
                    </button>
                </div>
            </div>

            {/* Section 2: Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { label: 'Total Players', value: '12', color: 'bg-blue-50 text-blue-700' },
                    { label: 'Online Players', value: '8', color: 'bg-green-50 text-green-700' },
                    { label: 'Top Channels', value: 'Lobby A', color: 'bg-purple-50 text-purple-700' },
                    { label: 'Most Played', value: 'Promo.mp4', color: 'bg-orange-50 text-orange-700' },
                    { label: 'Alerts', value: '2', color: 'bg-red-50 text-red-700' },
                ].map((metric, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase font-semibold">{metric.label}</p>
                        <p className={`text-2xl font-bold mt-2 ${metric.color.split(' ')[1]}`}>{metric.value}</p>
                    </div>
                ))}
            </div>

            {/* Section 3: Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Player Status Map (66%) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-96 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Player Status Map</h3>
                    <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center relative border-2 border-dashed border-gray-300">
                        <span className="text-gray-400 font-medium">Map Placeholder</span>

                        {/* Mock Pins */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md" title="Online"></div>
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md" title="Offline"></div>

                        {/* Zoom Controls */}
                        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                            <button className="w-8 h-8 bg-white rounded shadow text-gray-700 font-bold">+</button>
                            <button className="w-8 h-8 bg-white rounded shadow text-gray-700 font-bold">-</button>
                        </div>
                    </div>
                </div>

                {/* Right: Quick Actions (33%) */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        {[
                            'Create Channel',
                            'Register Player',
                            'Create Schedule',
                            'Upload Content',
                            'View Reports'
                        ].map((action, i) => (
                            <button key={i} className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                <span className="text-gray-700 font-medium text-sm">{action}</span>
                                <span className="text-gray-400">→</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 4: Weekly Schedule Overview */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Schedule Overview</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                            <tr>
                                <th className="px-4 py-3 font-medium">Target</th>
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <th key={day} className="px-4 py-3 font-medium">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: 'Lobby Player', schedule: ['Default', 'Default', 'Promo', 'Default', 'Promo', 'Weekend', 'Weekend'] },
                                { name: 'Cafeteria', schedule: ['Morning', 'Morning', 'Morning', 'Menu', 'Menu', '-', '-'] },
                                { name: 'All Screens', schedule: ['-', '-', 'Alert', '-', '-', '-', '-'] },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                                    {row.schedule.map((item, j) => (
                                        <td key={j} className="px-4 py-3">
                                            {item !== '-' ? (
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${item === 'Default' ? 'bg-blue-100 text-blue-700' :
                                                        item === 'Promo' ? 'bg-purple-100 text-purple-700' :
                                                            item === 'Alert' ? 'bg-red-100 text-red-700' :
                                                                'bg-gray-100 text-gray-700'
                                                    }`}>
                                                    {item}
                                                </span>
                                            ) : (
                                                <span className="text-gray-300">-</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
