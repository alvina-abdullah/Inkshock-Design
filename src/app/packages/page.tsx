'use client';
import React from "react";
import { motion } from "framer-motion";
import LogoPackages from "@/components/Logo-Packages";
import WebPackages from "@/components/Web-Packages";
import BrandingPackages from "@/components/Branding-Packages";
import VideoPackages from "@/components/Video-Packages";

const PricingSection = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full mt-28"
      >
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold uppercase">
          Our Pricing Packages
        </h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <LogoPackages />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <WebPackages />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <BrandingPackages />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <VideoPackages />
      </motion.div>
    </>
  );
};

export default PricingSection;
