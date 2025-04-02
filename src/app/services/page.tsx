'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCamera, FaChevronRight, FaGlobe, FaPalette, FaPen, FaPhone, FaPrint } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaPalette className="h-10 w-10 text-pink-500" />, 
      title: "Logo Design",
      description: "Create a memorable brand with custom logos, color palettes, and brand guidelines that capture your essence."
    },
    {
      icon: <FaGlobe className="h-10 w-10 text-orange-400" />, 
      title: "Web Design",
      description: "Stunning, responsive websites that look amazing on any device and drive conversions."
    },
    {
      icon: <IoIosPhonePortrait className="h-10 w-10 text-yellow" />, 
      title: "Bussiness Cards",
      description: "Intuitive user interfaces and seamless experiences that keep users engaged and coming back."
    },
    {
      icon: <FaPen className="h-10 w-10 text-teal-400" />, 
      title: "Illustration",
      description: "Custom illustrations and graphics that bring your ideas to life and make your content stand out."
    },
    {
      icon: <FaCamera className="h-10 w-10 text-green-400" />, 
      title: "Social Media marketing",
      description: "Professional Social Media marketing services to showcase your products, team, or services in the best light."
    },
    {
      icon: <FaPrint className="h-10 w-10 text-blue-400" />, 
      title: "Print Design",
      description: "Eye-catching business cards, brochures, packaging, and other print materials that make an impression."
    }
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2 ">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-pink-500 font-medium">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              Creative solutions for all your design needs
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From concept to completion, we offer a full range of design services to help your business stand out.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-pink-500/50 transition-colors"
            >
              <div className="absolute  inset-0 bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 ">
                {service.icon}
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-zinc-400">{service.description}</p>
                <Link href="#" className="mt-4 inline-flex items-center text-pink-500 hover:text-pink-400">
                  Learn more <FaChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;