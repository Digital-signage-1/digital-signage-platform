'use client';

export default function AppsBuilderPage() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Top Toolbar */}
            <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-gray-50">
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        defaultValue="New Sales Dashboard"
                        className="bg-transparent font-bold text-gray-900 focus:outline-none focus:border-b-2 focus:border-blue-500"
                    />
                    <span className="text-xs px-2 py-1 bg-gray-200 rounded text-gray-600">Draft</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-1.5 text-gray-700 hover:bg-white rounded-md text-sm font-medium">Preview</button>
                    <button className="px-3 py-1.5 text-gray-700 hover:bg-white rounded-md text-sm font-medium">Duplicate</button>
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50">Save</button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700">Publish</button>
                </div>
            </div>

            <div className="flex-1 flex min-h-0">
                {/* Left: Component List */}
                <div className="w-64 border-r border-gray-200 flex flex-col bg-gray-50">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase">Components</h3>
                    </div>
                    <div className="p-4 space-y-3 overflow-y-auto">
                        {['Chart', 'Table', 'Text Block', 'Image', 'Video Player', 'Weather Widget', 'Clock'].map((item, i) => (
                            <div key={i} className="bg-white p-3 rounded border border-gray-200 shadow-sm cursor-move flex items-center hover:border-blue-500 transition-colors">
                                <div className="w-6 h-6 bg-gray-100 rounded mr-3"></div>
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center: Canvas */}
                <div className="flex-1 bg-gray-100 p-8 overflow-auto flex items-center justify-center">
                    <div className="w-full max-w-4xl aspect-video bg-white shadow-lg rounded-lg border border-gray-200 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 pointer-events-none opacity-10">
                            {[...Array(72)].map((_, i) => <div key={i} className="border border-gray-400"></div>)}
                        </div>

                        {/* Mock Component on Canvas */}
                        <div className="absolute top-8 left-8 w-1/3 h-1/2 bg-blue-50 border-2 border-blue-500 rounded flex items-center justify-center p-4">
                            <span className="text-blue-700 font-medium">Sales Chart Placeholder</span>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border border-blue-500 rounded-full cursor-se-resize"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Properties Panel */}
                <div className="w-72 border-l border-gray-200 flex flex-col bg-white">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase">Properties</h3>
                    </div>
                    <div className="p-4 space-y-6 overflow-y-auto">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Data Source</label>
                            <select className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm bg-white">
                                <option>Sales API</option>
                                <option>Static Data</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Refresh Rate (min)</label>
                            <input type="number" defaultValue="5" className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm" />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Appearance</label>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Background</span>
                                    <div className="w-6 h-6 bg-white border border-gray-300 rounded"></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Border Radius</span>
                                    <span className="text-sm text-gray-900">4px</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Shadow</span>
                                    <span className="text-sm text-gray-900">None</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <button className="w-full px-3 py-1.5 bg-red-50 text-red-600 rounded text-sm font-medium hover:bg-red-100">Remove Component</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
