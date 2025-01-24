import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black">
      <h1 className="text-2xl font-bold">Link inn Net</h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-yellow-500">
          About
        </a>
        <a href="#packages" className="hover:text-yellow-500">
          Packages
        </a>
        <a href="#community" className="hover:text-yellow-500">
          Community Hangout
        </a>
        <a
          href="#contact"
          className="bg-transparent border border-white rounded-full px-4 py-1 hover:bg-yellow-500 hover:text-black"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

