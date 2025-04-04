"use client";
import PrintPackages from "@/components/Print-Packages";
import FeatureCards from "@/components/Banner.tsx";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import TShirts from "../tshirts/page";
import Caps from "../caps/page";
import Hoodies from "../hoodies/page";
import Categories from "../categories";
import Shirts from "@/components/shirts/page";
import { motion } from "framer-motion";
import Home from "@/components/Home";

const FeatureSection = () => {
  return (
    <div className="group mt-28 dark:to-black dark:text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Right - Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Home />
        </motion.div>
      </motion.section>

      <Categories />

      {/* Features Section */}
      <motion.section
        className="relative overflow-hidden bg-gray-100 px-8 py-12 dark:bg-black md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Left Gradient with Animation */}
        <div className="animate-moveLeft absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-pink-600 to-transparent opacity-60"></div>

        {/* Right Gradient with Animation */}
        <div className="animate-moveRight absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-pink-500 to-transparent opacity-60"></div>

        <motion.h2
          className="animate-fadeIn relative z-10 text-center text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose InkShock Design?
        </motion.h2>

        <motion.div
          className="relative z-10 mt-8 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            {
              title: "Premium Fabric",
              desc: "Made from 100% organic cotton, soft & durable.",
            },
            {
              title: "Eco-Friendly Prints",
              desc: "Sustainable, non-toxic ink for long-lasting vibrancy.",
            },
            {
              title: "Custom Designs",
              desc: "Collaborate with artists or create your own.",
            },
            {
              title: "Limited Editions",
              desc: "Exclusive designs you won’t find anywhere else.",
            },
            {
              title: "Fast Shipping",
              desc: "Reliable worldwide delivery to your doorstep.",
            },
            {
              title: "Satisfaction Guaranteed",
              desc: "Love it or your money back!",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="animate-fadeUp rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Shop by Category */}
      <motion.section
        className="px-8 py-12 md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Skull Designs", image: "/images/skull.jpg" },
            { title: "Tribal Art", image: "/images/tribal-art.jpg" },
            { title: "Minimalist", image: "/images/minimalist.jpg" },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-pink-600 bg-white p-6 text-center shadow-md hover:bg-slate-200 dark:bg-black"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <TShirts />
      <Shirts />
      <Hoodies />
      <Caps />
      <PrintPackages />
      <FeatureCards />
    </div>
  );
};

export default FeatureSection;
