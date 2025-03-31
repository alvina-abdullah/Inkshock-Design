"use client";
import React from "react";
import { motion } from "framer-motion";
const printpackages = () => {
  const printpackages = [
    {
      title: "InkShock Wear – Essential Package",
      price: "$299",
      description: "Perfect for startups, small brands, or personal merch.",
      features: [
        "10 Custom T-Shirts (Premium Cotton, Full-Color Print)",
        "5 Branded Caps (Embroidery or Printed Logo)",
        "5 Premium Shirts (Casual or Polo Style)",
        "FREE Logo Placement & Custom Design Consultation",
        "High-Quality Printing/Embroidery",
        "Fast Delivery (7-10 Days)",
        "🔹 Best for: Small businesses, influencers, team branding",


      ],
    },
    {
      title: "InkShock Wear – Pro Branding Package",
      price: "$499",
      description: "For growing brands looking to build a strong identity.",
      features: [
        "25 Custom T-Shirts (Full-Color Print + Front & Back Logo)",
        "10 Premium Shirts (Casual, Polo, or Button-Up)",
        "5 Stylish Jackets (Custom Patches, Embroidery, or Prints)",
        "10 Branded Caps (Snapback, Dad Hats, or Beanies)",
        "FREE Custom Packaging & Brand Labels",
        "Priority Production (5-7 Days)",
        "FREE Mockups & Revisions",
        "🔹 Best for: Clothing brands, startups, event merch, teams",
      ],
    },
    {
      title: "InkShock Wear – Ultimate Merch Package",
      price: "$999",
      description:
        "The ultimate package for brands ready to dominate the fashion scene.",
      features: [
        "50 Custom T-Shirts (Premium Fabric + Multi-Color Printing)",
        "20 Stylish Shirts (Polo, Button-Up, or Oversized)",
        "10 Custom Jackets (Denim, Bomber, or Varsity)",
        "20 Branded Caps (Embroidered or Printed)",
        "Custom Hangtags, Labels & Premium Packaging",
        "Exclusive Limited-Edition Design Option",
        "Ultra-Fast Priority Production (3-5 Days)",
        " Dedicated Brand Consultant for Design & Marketing Tips",
        "🔹 Best for: Established brands, influencers, corporate uniforms, big events",
      ],
    },
  ];

  return (
    <section id="logo-packages" className="bg-white py-24 dark:bg-black ">
      {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="mx-auto max-w-6xl px-6">
        <h3 className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-5xl  font-extrabold text-transparent">
          Inshock Wear Packages
        </h3>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {printpackages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl border border-pink-500 bg-white p-6 text-black shadow-lg dark:bg-black dark:text-white 
         `}
            >
              <h3 className="text-center text-lg font-semibold uppercase">
                {pkg.title}
              </h3>
              <p className="my-2 text-center text-4xl font-bold">{pkg.price}</p>
              <p className="text-center text-gray-500 ">{pkg.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full  rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 py-2 font-bold text-black transition hover:bg-green-600">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default printpackages;
