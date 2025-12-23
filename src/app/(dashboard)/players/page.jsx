'use client';

import Link from 'next/link';

const PLAYERS = [
    { id: 1, name: 'Lobby Screen 1', type: 'Android', location: 'NYC HQ', channel: 'Lobby A', status: 'Online', lastHeartbeat: '1 min ago', color: 'bg-green-100 text-green-700' },
    { id: 2, name: 'Cafeteria Main', type: 'Windows', location: 'NYC HQ', channel: 'Cafeteria', status: 'Offline', lastHeartbeat: '2 hrs ago', color: 'bg-red-100 text-red-700' },
    { id: 3, name: 'Hallway South', type: 'LG WebOS', location: 'London Office', channel: 'Corporate', status: 'Online', lastHeartbeat: '30s ago', color: 'bg-green-100 text-green-700' },
    { id: 4, name: 'Meeting Room 4B', type: 'Samsung Tizen', location: 'NYC HQ', channel: 'Meeting Rooms', status: 'Warning', lastHeartbeat: '5 mins ago', color: 'bg-yellow-100 text-yellow-700' },
];

export default function PlayersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Players</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Register Player
                </button>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type / Location</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Channel</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Heartbeat</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {PLAYERS.map((player) => (
                            <tr key={player.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${player.color}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current inline-block mr-1"></span>
                                        {player.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{player.name}</div>
                                    <div className="text-xs text-gray-400">ID: {player.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{player.type}</div>
                                    <div className="text-xs text-gray-500">{player.location}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.channel}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.lastHeartbeat}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/players/${player.id}`} className="text-blue-600 hover:text-blue-900 mr-4">Manage</Link>
                                    <button className="text-gray-400 hover:text-gray-600">...</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
