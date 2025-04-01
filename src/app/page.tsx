'use client';
import { motion } from "framer-motion";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "./testimonials/page";
import { Metadata } from "next";
import WorkSection from "./work";
import ServicesSection from "./services/page";
import ProcessSection from "./process/page";
import Tabnavigation from "@/components/Tabnavigation";

// export const metadata: Metadata = {
//   title: "Inshock Design",
//   description: "",
//   // other metadata
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Hero />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <ServicesSection />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <WorkSection />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
        <Tabnavigation />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
        <ProcessSection />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
        <Testimonials />
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}>
        <Contact />
      </motion.div>
    </>
  );
}