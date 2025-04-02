"use client";
import React from "react";
import { motion } from "framer-motion";
const videopackages = () => {
  const videopackages = [
    {
      title: "Startup Video Package – Kickstart Your Brand",
      price: "$499",
      description:
        "Perfect for startups & small businesses looking for a professional promotional video.",
      features: [
        "30-Second High-Quality Video – Engaging & impactful",
        "Custom Professional Script – Crafted to convey your message effectively",
        "Storyboard for Visual Flow – Ensures a seamless narrative",
        "Eye-Catching Animation – Brings your brand to life",
        "Voice-Over & Sound Effects – Enhances viewer experience",
        "Unlimited Revisions – We refine it until its perfect!",
        "📅 Delivery: 4 Weeks",
        "💡 Launch your brand with an eye-catching video!",
      ],
    },
    {
      title: "Classic Video Package – Stand Out with a Compelling Story ",
      price: "$899",
      description:
        "Ideal for businesses looking to enhance their marketing with a high-quality animated video.",
      features: [
        "60-Second Animated Video – More time to tell your story",
        "Professionally Written Script – Tailored messaging for your brand",
        "Sample Theme for Inspiration – Helps shape your vision",
        "Storyboard for Seamless Storytelling – Visualized before production",
        "Custom Animation & Visual Effects – High-quality, engaging visuals",
        "Voice-Over & High-Quality Sound Design – Professional production value",
        "📩 Let’s create your perfect video – Contact us today!",
        "📅 Delivery: 5 Weeks",
    
      ],
    },
    {
      title: "Premium Video Package – The Ultimate Marketing Tool",
      price: "$1,399",
      description:
        "The best choice for businesses ready to make a bold impact with high-end video production.",
      features: [
        "90-Second Engaging Video – More time, more impact",
        "Custom Professional Script & Sample Theme – Designed to convert",
        "Storyboard to Bring Your Vision to Life – A structured approach to storytelling",
        "High-Quality Animation & Motion Graphics – Stunning visuals for maximum engagement",
        "Professional Voice-Over & Sound Effects – Crystal-clear audio experience",
        "A powerful video to showcase your brand!",
        "📅 Delivery: 6 Weeks",
        "💡 Make your brand unforgettable with a premium video!",
        "📩 Let’s create your perfect video – Contact us today!",
      ],
    },
  ];

  return (
    <section id="video-packages" className="bg-white py-24 dark:bg-black ">
      {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="pb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-5xl  font-extrabold text-transparent">
          Video Packages
        </h3>
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
          {videopackages.map((pkg, index) => (
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

export default videopackages;
