"use client";
import PrintPackages from "@/components/Print-Packages";
import FeatureCards from "@/components/Banner.tsx";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import TShirts from "../tshirts/page";
import Caps from "../caps/page";
import Hoodies from "../hoodies/page";
import PinterestVideo from "../pinterestvideo/page";
import Categories from "../categories";
import Shirts from "@/components/shirts/page";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <div className="group mt-28 dark:to-black dark:text-white">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-between bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-12 text-black dark:text-white md:flex-row md:px-16 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left - Content */}
        <motion.div
          className="mt-6 w-full md:mt-0 md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="flex items-center bg-gradient-to-r from-teal-500 via-orange-600 to-pink-400 bg-clip-text font-bold uppercase text-transparent">
            <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400"></span>
            InkShock Design - Wear Your Passion
          </p>

          <motion.h2
            className="mt-2 text-3xl font-bold leading-tight md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                "Wear Your Art. Own Your Style.",
                1000,
                "You Print It. We Dream It.",
                1000,
                "Express Yourself with Every Thread.",
                1000,
              ]}
              style={{ fontSize: "40px" }}
              repeat={Infinity}
            />
          </motion.h2>

          <p className="mt-4 text-lg">
            At Inkshock Design, we&apos;re dedicated to delivering high-quality,
            comfortable, and stylish apparel that exceeds your expectations.
            We believe fashion is an extension of your personality. Our
            premium-quality, custom-designed let you showcase your unique style
            with bold, eye-catching graphics that turn heads.
          </p>

          <ul className="mt-4 space-y-2 text-lg">
            <li>
              ✔ **High-Quality Cotton** – Soft, breathable, and long-lasting.
            </li>
            <li>
              ✔ **Eco-Friendly Printing** – Vibrant designs that are
              environmentally conscious.
            </li>
            <li>
              ✔ **Exclusive Artwork** – Designs created by top independent
              artists.
            </li>
          </ul>
          <Link href="/packagesn">
            <button className="rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400  px-6 py-3 font-semibold text-white hover:bg-gray-900">
              Shop Now
            </button>
          </Link>
        </motion.div>

        {/* Right - Hero Image */}
        <motion.div
          className="flex w-full justify-center md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <PinterestVideo />
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
            { title: "Premium Fabric", desc: "Made from 100% organic cotton, soft & durable." },
            { title: "Eco-Friendly Prints", desc: "Sustainable, non-toxic ink for long-lasting vibrancy." },
            { title: "Custom Designs", desc: "Collaborate with artists or create your own." },
            { title: "Limited Editions", desc: "Exclusive designs you won’t find anywhere else." },
            { title: "Fast Shipping", desc: "Reliable worldwide delivery to your doorstep." },
            { title: "Satisfaction Guaranteed", desc: "Love it or your money back!" }
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
            { title: "Minimalist", image: "/images/minimalist.jpg" }
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
