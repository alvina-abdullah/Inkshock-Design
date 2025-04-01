'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BrandingPackages from "@/components/Branding-Packages";

const Branding = () => {
  const projects = [
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

  return (
    <motion.section
      id="logo"
      className="w-full bg-white py-12 pt-28 dark:bg-zinc-900 md:py-24 lg:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="h-40 w-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
        <h3 className="pt-16 text-center text-4xl font-extrabold text-white">
          CUSTOM BRANDING
        </h3>
      </div>

      <motion.section
        className="flex flex-col items-center justify-between px-6 py-12 md:flex-row md:px-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/branding.png"
              alt="Web Development Illustration"
              width={500}
              height={400}
              className="max-w-full"
            />
          </motion.div>
        </div>
        <div className="text-black dark:text-white md:w-1/2">
          <motion.h2
            className="mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Branding Your Bussiness
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Business Branding services are designed to establish a strong
            and distinctive identity for your company. We collaborate closely
            with you to understand your values, target audience, and goals,
            ensuring that our branding strategies align seamlessly with your
            vision. From creating memorable logos and visual assets to
            developing cohesive brand guidelines, we craft a consistent and
            compelling brand presence across all touchpoints. Our team of
            experienced designers and strategists employs market research and
            industry insights to position your business uniquely and effectively
            communicate your value proposition. With our Business Branding
            services, we help you make a lasting impression and stand out in a
            competitive market.
          </motion.p>
        </div>
      </motion.section>

      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="space-y-2"></div>
          <div className="rounded-sm">
            <h4 className="rounded-sm uppercase bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-3 text-4xl font-extrabold text-white">
              Branding
            </h4>
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
              transition: { staggerChildren: 0.2 },
            },
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
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-sm font-medium text-pink-500">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BrandingPackages />
    </motion.section>
  );
};

export default Branding;
