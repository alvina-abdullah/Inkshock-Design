'use client';
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import WebPackages from "@/components/Web-Packages";

const Customlogo = () => {
  const projects = [
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
  ]
    // ... other projects


  return (
    <motion.section 
      id="logo" 
      className="w-full pt-28 py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">CUSTOM WEB DEVELOPMENT</h3>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
        <div className="md:w-1/2">
          <Image 
            src="/images/web/web.png" 
            alt="Web Development Illustration"
            width={500}
            height={400}
            className="max-w-full"
          />
        </div>
        <motion.div 
          className="md:w-1/2 text-black dark:text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
            Increase Your Online Presence
          </h2>
          <p className="text-lg leading-relaxed">
            Increase your online presence and attract more customers with our professional
            website development services. With our expertise in custom web development
            and design, we create stunning and unique websites tailored specifically to your
            business needs.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Stand out from the competition and showcase your brand with a visually
            appealing and user-friendly website that is guaranteed to engage your audience.
            Gain credibility and trust with a professionally designed website that reflects the
            quality of your products or services.
          </p>
        </motion.div>
      </section>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="rounded-sm">
              <h4 className="text-4xl px-8 py-3 rounded-sm text-white font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">WEB DEVELOPMENT</h4>
            </div>
          </div>
        </div>

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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <WebPackages/>
    </motion.section>
  )
}

export default Customlogo;
