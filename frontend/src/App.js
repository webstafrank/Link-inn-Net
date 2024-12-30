// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PackagePage from './pages/PackagePage';
import CommunityPage from './pages/CommunityPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/packages" element={<PackagePage />} />
                <Route path="/community" element={<CommunityPage />} />
            </Routes>
        </Router>
    );
};

export default App;

