'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoPackages from "@/components/Video-Packages";

const customvideoanimation = () => {
  // const projects = [
  //   {
  //     title: "Vibrant Branding",
  //     category: "Web Design",
  //     image: "/images/web/web1.png?height=400&width=600",
  //   },
  //   {
  //     title: "Modern E-commerce",
  //     category: "Web Design",
  //     image: "/images/web/web2.png?height=400&width=600",
  //   },
  //   {
  //     title: "App Interface",
  //     category: "Web Design",
  //     image: "/images/web/web3.png?height=400&width=600",
  //   },
  //   // Additional projects...
  // ];

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
          CUSTOM VIDEO ANIMATION
        </h3>
      </div>

      <motion.div
        className="container mx-auto flex w-full flex-col items-center bg-white px-6 py-16 dark:bg-black md:flex-row md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Text */}
        <div className="text-center md:w-1/2 md:text-left">
          <h2 className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Custom Your Own Video
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Our video animation services excel at bringing your ideas to life
            through captivating visual storytelling. With expertise in both 2D
            and 3D animation techniques, we create dynamic and engaging videos
            that effectively convey your message. Our skilled team utilizes
            industry-standard software to deliver high-quality animations that
            align seamlessly with your brand identity. Whether you need animated
            videos for marketing, training, or entertainment purposes, our
            services will help you stand out from the crowd and leave a lasting
            impression on your audience. From concept development to final
            production, we are committed to delivering exceptional video
            animation services tailored to your specific needs.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="mt-4 flex justify-center md:mt-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/video/video.png" // Replace with your image path
              alt="Graphic Designer Illustration"
              width={1000}
              height={900}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Projects */}
      {/* <motion.div
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
      > */}
        {/* {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          > */}
            {/* <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="text-sm font-medium text-pink-500">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div> */}

      <VideoPackages />
    </motion.section>
  );
};

export default customvideoanimation;
