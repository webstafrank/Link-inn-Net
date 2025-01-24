
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PackagesSection from "./components/PackagesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <Footer />
    </div>
  );
}

export default App;

