// frontend/src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const LandingPage = lazy(() => import('./components/LandingPage'));
const PackagePage = lazy(() => import('./pages/PackagePage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const NotFoundPage = () => <div className="p-6 text-center text-red-500">404 - Page Not Found</div>;

const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="min-h-screen">
                <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/packages" element={<PackagePage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </main>
        </Router>
    );
};

export default App;

