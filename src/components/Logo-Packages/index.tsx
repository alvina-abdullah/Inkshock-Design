"use client";
import React from "react";
import { motion } from "framer-motion";
const logopackages = () => {
  const logopackages = [
    {
      title: "StartUp Logo Package – Affordable & Professional",
      price: "$49",
      description:
        "Perfect for new businesses looking for a strong brand identity.",
      features: [
        "4 Unique Logo Concepts – Designed to match your vision",
        "3 Revisions – Fine-tune your design to perfection",
        "2 Dedicated Designers – Expert creativity at work",
        "48 Hours Turnaround – Quick & efficient delivery",
        "100% Satisfaction & Ownership Rights",
      ],
    },
    {
      title: "Silver Logo Package – Best Value!",
      price: "$99",
      description: "A comprehensive package with added branding perks.",
      features: [
        " 6 Custom Logo Concepts – More choices, better branding",
        "6 Revisions – Refine your logo until it's perfect",
        "FREE Icon Design & Grayscale Format – Versatility for all uses",
        "FREE Color Options & Vector Files – High-quality files for any medium",
        "4 Creative Designers – More ideas, better results",
        "48 Hours Turnaround – Quick and hassle-free",
        "100% Ownership Rights & Money-Back Guarantee",
      ],
    },
    {
      title: "Gold Logo Package – Ultimate Branding Solution!",
      price: "$199",
      description:
        "The complete branding package for businesses ready to stand out.",
      features: [
        "12 Unique Logo Concepts – A variety of high-end options",
        "UNLIMITED Revisions – Perfect your logo with no limits",
        "FREE Icon Design, Grayscale & Color Variations – Maximize versatility",
        "FREE File Formats – Includes PSD, PDF, AI, JPEG, PNG, & Vector",
        "Complete Stationery Design – Business Card, Letterhead, Envelope & Invoice",
        "48-72 Hours Turnaround Time – Quality without the wait",
        "100% Ownership Rights & Unique Design Guarantee",
        "💯 100% Satisfaction Guaranteed",
        "💯 Risk-Free Money-Back Guarantee",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-black ">
      {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="mx-auto max-w-6xl px-6">
        <h3 className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-5xl  font-extrabold text-transparent">
          Logo Packages
        </h3>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {logopackages.map((pkg, index) => (
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

export default logopackages;
