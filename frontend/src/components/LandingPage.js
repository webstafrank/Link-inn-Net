// frontend/src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-gray-50">
            <h1 className="text-5xl font-extrabold mb-6 text-blue-900">
                Welcome to <span className="text-blue-600">Link in Net</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 text-center max-w-lg leading-relaxed">
                Fast and affordable internet for residents of Homabay.<br />
                Join our community to discover trends and opportunities.
            </p>
            <div className="flex space-x-4">
                <button
                    className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
                    onClick={() => window.location.href = '/packages'}
                >
                    📦 View Internet Packages
                </button>
                <button
                    className="px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-lg hover:bg-green-600 transition transform hover:scale-105"
                    onClick={() => window.location.href = '/community'}
                >
                    🌐 Visit Community Hangout
                </button>
            </div>
        </div>
    );
};

export default LandingPage;

