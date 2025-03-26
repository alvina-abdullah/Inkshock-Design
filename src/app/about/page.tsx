"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="bg-white py-12 pt-28 dark:bg-black md:py-24 lg:py-32">
      {/* Header Section with Animation */}
      <motion.div
        className="h-40 w-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="pt-16 text-center text-4xl font-extrabold text-white">
          ABOUT US
        </h3>
      </motion.div>

      {/* About Section */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-bold text-black dark:text-white">ABOUT</h3>
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Inkshock Design
          </h2>
          <p className="mt-4 text-black dark:text-white">
            At InkShock Design, we bring creativity to life! As a premier
            graphic design and web development agency based in the USA, we
            specialize in crafting visually stunning and high-performing digital
            experiences.
          </p>
          <p className="mt-2 text-black dark:text-white">
            With over 10 years of expertise, we have helped businesses of all
            sizes elevate their brand identity through innovative design,
            cutting-edge websites, and impactful digital solutions. Our
            dedication to quality, creativity, and customer satisfaction has
            earned us recognition as a trusted industry leader.
          </p>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/about/about.png"
            width={400}
            height={200}
            alt="About Us"
            className="rounded-lg"
          />
        </motion.div>
      </div>

      {/* What Makes Us Unique Section */}
      <motion.div
        className="relative bg-cover bg-center px-6 py-16 text-white"
        style={{ backgroundImage: "url('/unique-g.png')" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-4xl text-center text-black dark:text-white">
          <motion.div
            className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-4 py-2 text-sm font-semibold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Inkshock Design
          </motion.div>

          <motion.h2
            className="mt-4 text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to InkShock Design – Where Creativity Meets Innovation
            
          </motion.h2>
          <br />
          {/* <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          > */}
          <p>
            At InkShock Design, we craft stunning visuals, high-performance
            websites, and powerful branding solutions to help businesses make a
            lasting impact. Whether you&apos;re a startup looking for a bold identity
            or an established brand in need of a revamp, we bring your vision to
            life with cutting-edge design and seamless digital experiences.
            </p>
            <br />
            <br />
            <h3 className="text-center text-2xl font-semibold">
              Why Choose InkShock Design?
            </h3>
            <ul className="mt-6 space-y-2 text-left text-center text-lg text-black dark:text-white">
              <li>
                🚀 10+ Years of Experience – Trusted by businesses across
                industries.
              </li>
              <li>
                🎨 Custom Branding & Web Solutions – Unique, eye-catching
                designs tailored to your needs.
              </li>
              <li>
                ⚡ Fast Turnaround & Affordable Pricing – High-quality results
                without breaking the bank.
              </li>
              <li>
                💯 100% Satisfaction Guarantee – Your success is our priority.
              </li>
            </ul>
            <ul>
              <br />
              <h3 className="text-center text-2xl font-semibold">
                Our Services
              </h3>
              <br />
              <li>
                ✔ Logo Design & Branding – Crafting memorable brand identities.
              </li>
              <li>
                ✔ Web Design & Development – Engaging, responsive, and
                high-performing websites.
              </li>
              <li>
                ✔ Marketing & Promotional Design – Flyers, brochures,
                packaging, and more.
              </li>
              <li>
                ✔ Video Animation & Motion Graphics – High-quality visuals to
                captivate your audience.
              </li>
            </ul>
            <h1 className="mt-6 text-black dark:text-white">
              📩 Ready to take your brand to the next level? Let&apos;s create
              something extraordinary together!
            </h1>
          {/* </motion.p> */}
        </div>
      </motion.div>

      {/* Mission-Driven Section */}
      <div className="bg-gray-50 px-6 py-16 dark:bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-4 py-2 text-sm font-semibold text-white">
              MISSION-DRIVEN
            </div>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              A Quest To Help Others
            </h2>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-700 dark:text-white">
              At Inkshock Design, we are committed to assisting small and
              medium-sized business owners in creating logos they truly adore
              and take pride in. We understand that naming a brand, crafting a
              company slogan, and conveying the right message to consumers can
              be both exciting and overwhelming. Recognizing the time-consuming
              nature of starting or rebranding a business, our goal is to
              streamline the process, reduce costs, and deliver high-quality
              logos and marketing products that not only turn heads but also
              enhance brand awareness.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
