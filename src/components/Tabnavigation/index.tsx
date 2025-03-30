"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoPackages from "@/components/Logo-Packages";
import WebPackages from "@/components/Web-Packages";
import BrandPackages from "@/components/Branding-Packages";
import VideoPackages from "@/components/Video-Packages";
const PackagesPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Logo");

  // Check URL hash and set active tab
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash.charAt(0).toUpperCase() + hash.slice(1)); // Capitalize first letter
    }
  }, []);

  // Handle tab click
  const handleTabClick = (category: string) => {
    setActiveTab(category);
    router.push(`#${category.toLowerCase()}`, { scroll: false }); // Update URL hash without scrolling
  };

  return (
<div className="mt-12 flex flex-col items-center px-4">
  {/* Title */}
  <h3 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text">
    Our Pricing Packages
  </h3>

  {/* Category Buttons */}
  <div className="flex  justify-center bg-black rounded-lg shadow-md dark:bg-white mt-10 w-full max-w-2xl">
    {["Logo", "Web", "Brand", "Video"].map((category) => (
      <button
        key={category}
        onClick={() => handleTabClick(category)}
        className={`px-6 sm:px-10 md:px-16 py-3 font-semibold transition-all w-1/2 sm:w-auto ${
          activeTab === category
            ? "text-white bg-pink-600 dark:text-black"
            : "text-white dark:text-black"
        }`}
      >
        {category}
      </button>
    ))}
  </div>



      {/* Show Selected Package Component */}
      <div className="mt-8 ">
        {activeTab === "Logo" && <LogoPackages />}
        {activeTab === "Web" && <WebPackages />}
        {activeTab === "Brand" && <BrandPackages />}
        {activeTab === "Video" && <VideoPackages />}
      </div>
    </div>
  );
};

export default PackagesPage;
