'use client';

export default function SchedulesPage() {
    const HOURS = Array.from({ length: 24 }, (_, i) => i);
    const RESOURCES = ['Lobby Group', 'Cafeteria', 'Sales Floor', 'Exec Office'];

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-gray-50">
                <h1 className="text-xl font-bold text-gray-900">Weekly Schedule</h1>
                <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">Today</button>
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">Day</button>
                    <button className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-sm font-medium">Week</button>
                    <button className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">Month</button>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700">Publish Schedule</button>
            </div>

            <div className="flex-1 overflow-auto relative">
                <div className="min-w-[1000px] h-full flex flex-col">
                    {/* Header Row (Hours) */}
                    <div className="flex border-b border-gray-200 select-none">
                        <div className="w-40 flex-shrink-0 p-4 font-bold text-gray-500 bg-gray-50 border-r border-gray-200">Player / Group</div>
                        <div className="flex-1 flex">
                            {HOURS.map(h => (
                                <div key={h} className="flex-1 border-r border-gray-100 text-xs text-center p-2 text-gray-500">
                                    {h}:00
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="flex-1 overflow-y-auto">
                        {RESOURCES.map((resource, i) => (
                            <div key={i} className="flex border-b border-gray-100 h-24 relative group hover:bg-gray-50">
                                <div className="w-40 flex-shrink-0 p-4 font-medium text-gray-700 bg-gray-50 border-r border-gray-200 flex items-center">
                                    {resource}
                                </div>
                                <div className="flex-1 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMGgwdjIwIiBzdHJva2U9IiNlN2U3ZTciIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]">
                                    {/* Scheduler Grid Lines are background */}

                                    {/* Mock Schedule Blocks */}
                                    {(i === 0) && (
                                        <>
                                            <div className="absolute top-2 bottom-2 left-[10%] w-[15%] bg-blue-100 border border-blue-300 rounded shadow-sm text-xs p-2 text-blue-800 overflow-hidden cursor-move">
                                                <strong>Default Loop</strong><br />02:24 - 06:00
                                            </div>
                                            <div className="absolute top-2 bottom-2 left-[30%] w-[10%] bg-purple-100 border border-purple-300 rounded shadow-sm text-xs p-2 text-purple-800 overflow-hidden cursor-move">
                                                <strong>Ad Spot</strong>
                                            </div>
                                        </>
                                    )}
                                    {(i === 1) && (
                                        <div className="absolute top-2 bottom-2 left-[45%] w-[20%] bg-green-100 border border-green-300 rounded shadow-sm text-xs p-2 text-green-800 overflow-hidden cursor-move">
                                            <strong>Lunch Menu</strong><br />11:00 - 14:00
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
