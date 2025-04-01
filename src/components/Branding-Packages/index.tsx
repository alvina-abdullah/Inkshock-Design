"use client";
import React from "react";
import { motion } from "framer-motion";
const brandingpackages = () => {
  const brandingpackages = [
    {
      title: "Startup Essentials Package – Kickstart Your Brand",
      price: "$99",
      description:
        "Perfect for entrepreneurs & small businesses launching their journey.",
      features: [
        "2 Custom Stationery Designs – Business card, letterhead, or other essentials",
        "FREE Fax Template – Maintain a professional look across communication",
        "High-Quality, Print-Ready Files – Ready for professional printing",
        "Unlimited Revisions – We refine it until you are 100% satisfied",
        // "100% Satisfaction & Money-Back Guarantee",
      ],
    },
    {
      title: "Complete Identity Package – Build a Stronger Brand ",
      price: "$199",
      description:
        "For businesses looking to enhance their identity and make an impact.",
      features: [
        "2 Custom Stationery Designs – Professionally crafted business essentials",
        "Eye-Catching Flyer Design – Market your business with style",
        "Professional Bi-Fold or Tri-Fold Brochure – Showcase your services effectively",
        "Unlimited Revisions – Get the perfect look for your brand",
        "100% Satisfaction & Risk-Free Guarantee",
      ],
    },
    {
      title: "Premium Branding Bundle – The Ultimate Business Identity ",
      price: "$399",
      description:
        "The all-in-one package for businesses ready to scale and dominate their market.",
      features: [
        "2 Custom Stationery Designs – Business card, letterhead, and more",
        " Creative & Professional Packaging Design – Stand out on the shelves",
        "Custom T-Shirt Design – Stylish branding apparel for your business 👕",
        "Unlimited Revisions – We keep working until it&apos;s perfect!",
        "100% Satisfaction & Money-Back Guarantee",
      ],
    },
  ];

  return (
    <section id="branding-packages" className="bg-white py-24 dark:bg-black ">
      {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="pb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-5xl font-extrabold text-transparent">
          Branding Packages
        </h3>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {brandingpackages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl border border-pink-500 bg-white p-6 text-black shadow-lg dark:bg-black dark:text-white 
`}
            >
              <h3 className="text-center text-lg font-semibold uppercase text-black dark:text-white">
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

export default brandingpackages;
