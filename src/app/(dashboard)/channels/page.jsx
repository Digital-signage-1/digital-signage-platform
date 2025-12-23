'use client';

export default function ChannelsPage() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Top Toolbar */}
            <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-gray-50">
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-bold text-gray-900">Lobby Playlist</h1>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Live</span>
                </div>
                <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">Total Duration: 05:30</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-bold">Publish to Players</button>
                </div>
            </div>

            <div className="flex-1 flex min-h-0">
                {/* Left: Library */}
                <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50">
                    <div className="p-4 border-b border-gray-200 bg-white">
                        <input type="text" placeholder="Search content..." className="w-full px-3 py-2 border border-gray-300 rounded text-sm" />
                        <div className="flex space-x-2 mt-2">
                            <button className="flex-1 text-xs py-1 bg-blue-50 text-blue-600 rounded">Media</button>
                            <button className="flex-1 text-xs py-1 bg-gray-100 text-gray-600 rounded">Apps</button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="bg-white p-2 rounded shadow-sm border border-gray-200 flex space-x-3 cursor-grab hover:border-blue-400">
                                <div className="w-16 h-12 bg-gray-200 rounded"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Content Item {i}</p>
                                    <p className="text-xs text-gray-500">Video • 00:30</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center: Timeline/Stage */}
                <div className="flex-1 flex flex-col bg-gray-100">
                    {/* Stage/Preview */}
                    <div className="flex-1 p-8 flex items-center justify-center border-b border-gray-200">
                        <div className="aspect-video w-3/4 bg-black rounded shadow-2xl relative">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">
                                Preview
                            </div>
                            {/* Controls */}
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/50 flex items-center justify-center space-x-4">
                                <button className="text-white hover:text-blue-400">⏮</button>
                                <button className="text-white hover:text-blue-400">▶</button>
                                <button className="text-white hover:text-blue-400">⏭</button>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="h-48 bg-white border-t border-gray-200 p-4 overflow-x-auto whitespace-nowrap">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="inline-block w-32 h-32 bg-gray-50 border-2 border-transparent hover:border-blue-500 rounded p-1 cursor-pointer relative group">
                                    <div className="w-full h-20 bg-gray-200 rounded mb-1"></div>
                                    <p className="text-xs truncate font-medium">Item {i}</p>
                                    <p className="text-xs text-gray-500">10s</p>
                                    <span className="absolute top-1 right-1 w-5 h-5 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100">
                                        {i}
                                    </span>
                                </div>
                            ))}
                            {/* Add Button */}
                            <div className="inline-block w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
                                <span className="text-2xl text-gray-400">+</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Properties */}
                <div className="w-72 border-l border-gray-200 bg-white p-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 border-b pb-2">Properties</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Duration (s)</label>
                            <input type="number" defaultValue="10" className="w-full px-2 py-1 border border-gray-300 rounded text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Transition</label>
                            <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm">
                                <option>None</option>
                                <option>Fade</option>
                                <option>Slide</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Scale Mode</label>
                            <select className="w-full px-2 py-1 border border-gray-300 rounded text-sm">
                                <option>Fit</option>
                                <option>Fill</option>
                                <option>Stretch</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
