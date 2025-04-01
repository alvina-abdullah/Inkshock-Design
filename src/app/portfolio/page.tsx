'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "logo",
      image: "/images/work/logo1.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "logo",
      image: "/images/work/logo2.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "logo",
      image: "/images/work/logo3.png?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "logo",
      image: "/images/work/logo4.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "logo",
      image: "/images/work/logo5.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "logo",
      image: "/images/work/logo6.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "logo",
      image: "/images/work/logo7.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "logo",
      image: "/images/work/logo8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo9.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo10.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo11.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo12.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo13.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo14.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo15.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo16.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo17.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo18.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo19.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web1.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "Web Design",
      image: "/images/web/web2.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category:"Web Design",
      image: "/images/web/web3.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web4.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web5.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web6.png?height=400&width=600",
    },
    {
      title: "Marketing Campaig",
      category: "Web Design",
      image: "/images/web/web7.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web9.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web10.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web11.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web12.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web13.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web14.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web15.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web16.png?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding0.png?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding2.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding3.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding4.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding5.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding6.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding7.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding8.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding9.jpeg?height=400&width=600",
    },
    {
      title: "Vibrant Branding",
      category: "Branding",
      image: "/images/branding/branding1.jpeg?height=400&width=600",
    },
  ];
    // Add more projects here...


  return (
    <motion.section 
      id="work" 
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-orange-400 font-medium">
              Our Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              Showcasing our creative portfolio
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our recent projects and see how we have helped businesses like yours make an impact.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
                <Link href="#" className="mt-2 inline-flex items-center text-white hover:text-pink-400">
                  View Project <FaChevronCircleRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;