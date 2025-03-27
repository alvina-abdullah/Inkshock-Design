import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaChevronCircleRight } from "react-icons/fa"
import { motion } from "framer-motion";
import LogoPackages from "@/components/Logo-Packages";
import { IoMdLogOut } from "react-icons/io";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const hoverEffect = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Customlogo = () => {
  const projects = [
    {
      title: "Custom Illustrations",
      category: "Branding & Digital",
      image: "/images/work/logo1.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "Branding & Digital",
      image: "/images/work/logo2.png?height=400&width=600",
    },
    // More projects...
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      id="logo"
      className="w-full pt-28 py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white"
    >
      <motion.div className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full" variants={fadeIn}>
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">CUSTOM LOGO DESIGN</h3>
      </motion.div>

      <div className="w-full py-12 bg-white dark:bg-black container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        <motion.div className="md:w-1/2 text-center md:text-left" variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
            Stand Out with Custom Logo Designs
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Stand out from the competition with unique and eye-catching custom graphical designs...
          </p>
        </motion.div>

        <motion.div className="md:w-1/2 flex justify-center mt-6 md:mt-0" variants={fadeIn}>
          <Image src="/images/graphic.png" alt="Graphic Designer Illustration" width={400} height={200} />
        </motion.div>
      </div>

      <motion.div className="container px-4 md:px-6" variants={fadeIn}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div className="rounded-sm" variants={fadeIn}>
            <h4 className="text-4xl px-8 py-3 rounded-sm text-white font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">LOGOS</h4>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg" 
              variants={{ ...fadeIn, hover: hoverEffect.hover }}
              whileHover="hover"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-sm font-medium text-pink-500">{project.category}</div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="flex justify-center mt-8" variants={fadeIn}>
        </motion.div>
        <motion.div variants={fadeIn}>
          <LogoPackages />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Customlogo;
