// frontend/src/components/Packages.js
import React, { useEffect, useState } from 'react';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('/api/packages')
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    return (
        <div>
            <h1>Internet Packages</h1>
            <ul>
                {packages.map((pkg) => (
                    <li key={pkg._id}>
                        <h3>{pkg.name}</h3>
                        <p>{pkg.description}</p>
                        <p>Price: ${pkg.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Packages;

