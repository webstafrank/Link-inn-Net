import React from "react";

const PackagesSection = () => {
  return (
    <div className="px-8 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
        Our Packages
      </h2>
      <div className="flex justify-center space-x-6">
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-yellow-500">Sprint Ksh 20 'for' 2Hours</h3>
          <p className="text-gray-300">Relay Ksh 50 'for' 8 Hours</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-yellow-500">Fulltime Ksh 70 'for 24 Hours'</h3>
          <p className="text-gray-300">Marathon Ksh 1000 'for' 1 month</p>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;

