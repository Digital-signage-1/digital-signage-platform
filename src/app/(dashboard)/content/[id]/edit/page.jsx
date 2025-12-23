'use client';

import { useParams } from 'next/navigation';

export default function ContentEditPage() {
    const { id } = useParams();

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Edit Content #{id}</h1>
                <div className="space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">Cancel</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">Save Changes</button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
                {/* Left: Metadata Form */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm overflow-y-auto">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Properties</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Lobby Welcome Video" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Duration (sec)</label>
                                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="30" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="marketing, lobby" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Data Source</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                                <option>None (Static)</option>
                                <option>Weather API</option>
                                <option>Google Calendar</option>
                            </select>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Validity Period</h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Start Date</span>
                                    <span className="text-sm font-medium text-gray-900">Always</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">End Date</span>
                                    <span className="text-sm font-medium text-gray-900">Never</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Preview */}
                <div className="lg:col-span-2 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg overflow-hidden relative">
                    <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">Preview Mode</div>
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-400 font-medium">Rendering Preview...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
