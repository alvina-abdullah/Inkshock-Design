"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const webpackages = () => {
  const webpackages = [
    {
      title: "Startup Success Package",
      price: "$299",
      description:
        "A professional online presence to get your business started.",
      features: [
        "3-Page Custom Website – Designed to fit your brand and business goals",
        " 3 Engaging Banner Designs – Creative and impactful visuals",
        "5 High-Resolution Stock Photos – Royalty-free and premium quality",
        "Interactive jQuery Slider – Smooth transitions for an engaging user experience",
        "FREE Google-Friendly Sitemap – Helps with search engine ranking",
        "W3C Certified HTML – Clean, professional coding",
        "Fast Turnaround – Quick delivery to get your business online",
        "Social Media Branding: Facebook, Twitter & YouTube Page Design",
        "🔹 100% Unique & Custom Design Guarantee",
        "🔹 100% Satisfaction Guarantee",
        "🔹 100% Money-Back Guarantee",
      ],
    },
    {
      title: "Professional Growth Package",
      price: "$399",
      description:
        "A dynamic website with more functionality & branding power.",
      features: [
        "5-Page Custom Website – Unique and user-friendly design",
        "CMS/Admin Panel – Easily manage & update your site",
        "8 Premium Stock Photos + 5 Banner Designs – Stunning visuals",
        "Interactive jQuery Slider – Engaging animations",
        "FREE Google-Friendly Sitemap – Enhances SEO performance",
        "W3C Certified HTML – High-quality development",
        "48-72 Hours Turnaround – Quick and efficient delivery",
        "Social Media Setup – Facebook, Twitter & YouTube branding",
        " Complete Website Deployment – Ready to go live",
        "🔹 100% Unique Design & Customization",
        "🔹 100% Satisfaction Guarantee",
        "🔹 100% Money-Back Guarantee",
      ],
    },
    {
      title: "Premium Business Package ",
      price: "$799",
      description:
        "The ultimate website solution for businesses ready to dominate online.",
      features: [
        "10-Page Fully Customized Website – Professional, modern & sleek",
        "Conceptual & Dynamic Design – Built to impress and engage",
        "Online Payment Integration – Secure transactions for your customers",
        "Content Management System (CMS) – Easy-to-use backend for updates",
        "Mobile-Responsive Design – Seamless experience on all devices",
        "Lead Capturing Forms – Convert visitors into customers",
        "Newsletter & Newsfeed Integration – Keep your audience engaged",
        "Social Media Integration – Connect your brand across platforms",
        "Search Engine Submission – Boosts online visibility",
        "5 Premium Stock Photos + 3 Unique Banners – High-quality visuals",
        "1 jQuery Slider Banner – Smooth, interactive animations",
        "W3C Certified HTML – Clean, professional coding",
        "48-72 Hours Turnaround Time – Fast, efficient delivery",
        "Complete Branding & Social Media Setup – Facebook, Twitter & YouTube",
        "🔹 100% Unique, Custom-Tailored Design",
        "🔹 100% Satisfaction Guarantee",
        "🔹 100% Money-Back Guarantee",
      ],
    },
  ];

  return (
    <section id="web-packages" className="bg-white py-24 dark:bg-black ">
      {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="pb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-5xl font-extrabold text-transparent">
          Website Packages
        </h3>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {webpackages.map((pkg, index) => (
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
              <Link href="/contact">
              <button className="mt-6 w-full  rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 py-2 font-bold text-black transition hover:bg-green-600">
                Buy Now
              </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default webpackages;
