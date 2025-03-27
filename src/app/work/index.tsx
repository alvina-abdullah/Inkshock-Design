'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const WorkSection = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "Brand Identity",
      image: "/images/work/logo7.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "Web Design",
      image: "/images/work/logo6.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "UI/UX Design",
      image: "/images/work/logo9.png?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "Print Design",
      image: "/images/work/logo4.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "Illustration",
      image: "/images/work/logo2.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo12.png?height=400&width=600",
    },
  ];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-600 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-800 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400 opacity-30 rounded-full blur-3xl" />
      </div>

      <section className="relative py-16">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-orange-400 font-medium"
              >
                Our Work
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400"
              >
                Showcasing our creative portfolio
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Take a look at some of our recent projects and see how we have helped businesses like yours make an impact.
              </motion.p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 relative z-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-[300px] w-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-sm font-medium text-pink-500">{project.category}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <Link href="#" className="mt-2 inline-flex items-center text-white hover:text-pink-400">
                    View Project <FaChevronCircleRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-sm px-8 py-3 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-black hover:opacity-90 transition-opacity"
            ><Link href="/customlogo">
              View All Projects
              </Link>
            </motion.button>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default WorkSection;