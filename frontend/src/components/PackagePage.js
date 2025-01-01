// frontend/src/pages/PackagePage.js
import React, { useEffect, useState } from 'react';

const PackagePage = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/packages')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch packages');
                return res.json();
            })
            .then((data) => {
                setPackages(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 font-bold">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Available Internet Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">{pkg.name}</h2>
                        <p className="text-gray-700 mb-4">{pkg.description}</p>
                        <p className="text-green-500 font-bold mb-4">Price: ${pkg.price}</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            onClick={() => alert(`Viewing details for ${pkg.name}`)}
                            aria-label={`View details for ${pkg.name}`}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackagePage;

