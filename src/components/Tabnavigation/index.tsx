"use client";

import { useState } from "react";

const packages = [
  {
    category: "Logo",
    title: "Basic Logo Package",
    price: "$99",
    features: [
      "3 Custom Logo Concepts",
      "Unlimited Revisions",
      "High-Resolution Files",
      "Dedicated Designer",
    ],
  },
  {
    category: "Web",
    title: "Starter Web Package",
    price: "$299",
    features: [
      "5 Page Website",
      "Mobile Responsive",
      "Basic SEO Optimization",
      "1 Year Free Hosting",
    ],
  },
  {
    category: "Brand",
    title: "Brand Identity Package",
    price: "$499",
    features: [
      "Logo + Business Card",
      "Letterhead & Envelope",
      "Social Media Kit",
      "Brand Style Guide",
    ],
  },
  {
    category: "Video",
    title: "Promo Video Package",
    price: "$399",
    features: [
      "30 Sec Video Animation",
      "Professional Voiceover",
      "Background Music",
      "Unlimited Revisions",
    ],
  },
];

const PackagesPage = () => {
  const [activeTab, setActiveTab] = useState("Logo");
  return (
          
        <>
          <div className="mt-12 flex justify-center">
          <div className="flex bg-gray-200 rounded-lg shadow-md dark:bg-gray-700">
            {["Logo", "Web", "Brand", "Video"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === category
                    ? "bg-gray-800 text-white dark:bg-pink-600"
                    : "text-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        </>
  );
};

export default PackagesPage;


