export default function AuthBrandedSide() {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-600 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-white mb-2">SignageOS</h1>
                    <p className="text-blue-100 text-sm">Digital Signage Platform</p>
                </div>

                <div className="space-y-8 max-w-md">
                    <div>
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Manage Your Content</h3>
                        <p className="text-blue-100 text-sm">Upload, organize, and schedule content across all your digital displays from one central platform.</p>
                    </div>

                    <div>
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Monitor Players</h3>
                        <p className="text-blue-100 text-sm">Track the status and performance of all your digital signage players in real-time.</p>
                    </div>

                    <div>
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Schedule Everything</h3>
                        <p className="text-blue-100 text-sm">Create and manage schedules for different channels, times, and locations with ease.</p>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center space-x-6 text-blue-100 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Documentation</a>
                    <a href="#" className="hover:text-white transition-colors">Support</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
        </div>
    );
}

