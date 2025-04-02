'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesSection from "../services/page";

const Aboutsection = () => {
  return (
    <div className="bg-white py-12 pt-28 dark:bg-black md:py-24 lg:py-32">
      {/* Header Section */}
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
      <motion.div 
        className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white dark:bg-black lg:w-1/2">
          <h3 className="font-bold text-black dark:text-white text-xl pt-0">About</h3>
          <h2 className="text-4xl font-extrabold text-black dark:text-white">
            Inkshock Design
          </h2>
          <p className="mt-4 text-black dark:text-white">
          At InkShock Design, we bring creativity to life! As a premier
            graphic design and web development agency based in the USA, we
            specialize in crafting visually stunning and high-performing digital
            experiences.
          </p>
          <br />
          <p>
          With over 10 years of expertise, we have helped businesses of all
            sizes elevate their brand identity through innovative design,
            cutting-edge websites, and impactful digital solutions. Our
            dedication to quality, creativity, and customer satisfaction has
            earned us recognition as a trusted industry leader.
          </p>
        </div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/about/about.png"
            width={500}
            height={300}
            alt="About Us"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* What Makes Us Unique Section */}
      <motion.div
        className="relative bg-cover bg-center px-6 py-16 text-white "
        style={{ backgroundImage: "url('/unique-g.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
                  <div className="mx-auto max-w-4xl text-center text-black dark:text-white">

          <br />
          <div className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-4 py-2 text-sm font-semibold text-black dark:text-white">
            Inkshock Design
          </div>
          <h2 className="mt-4 text-4xl font-bold text-black dark:text-white">
            Welcome to InkShock Design – Where Creativity Meets Innovation
          </h2>
          <br />
          <p className="mt-4 text-lg text-black dark:text-white">
            At InkShock Design, we craft stunning visuals, high-performance
            websites, and powerful branding solutions to help businesses make a
            lasting impact. Whether you&apos;re a startup looking for a bold identity
            or an established brand in need of a revamp, we bring your vision to
            life with cutting-edge design and seamless digital experiences.
          </p>
          <br />
          <br />
          <h3 className="text-center text-2xl font-bold">Why Choose InkShock Design?</h3>
          <ul className="mt-6 space-y-2 text-lg text-center text-black dark:text-white">
            <li>
            🚀 10+ Years of Experience – Trusted by businesses across industries.
            </li>
            <li>
            🎨 Custom Branding & Web Solutions – Unique, eye-catching designs tailored to your needs.
            </li>
            <li>
            ⚡ Fast Turnaround & Affordable Pricing – High-quality results without breaking the bank.
            </li>
            <li>
            💯 100% Satisfaction Guarantee – Your success is our priority.
            </li>
            </ul>
            <ul>
              <br />
              <br />
            <h3 className="text-center text-2xl font-bold">Our Services</h3>
            <br />
            <li>
            ✔ Logo Design & Branding – Crafting memorable brand identities.
            </li>
            <li>
            ✔ Web Design & Development – Engaging, responsive, and high-performing websites.
            </li>
            <li>
            ✔ Marketing & Promotional Design – Flyers, brochures, packaging, and more.
            </li>
            <li>
            ✔ Video Animation & Motion Graphics – High-quality visuals to captivate your audience.
            </li>
          </ul>
          <p className="mt-6 text-black dark:text-white">
          📩 Ready to take your brand to the next level? Let&apos;s create something extraordinary together!
          </p>
          </div>
      </motion.div>
<br />
<br />
<ServicesSection/>

      {/* Additional Sections with Animation */}
      <motion.div 
            className="text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          
      <h3 className=" text-center font-extrabold text-4xl">Elevate your brand to new heights</h3>      
      </motion.div>
      <div className="max-w-5xl mx-auto mt-12 grid gap-10 md:grid-cols-2">
        {[
          { title: "Our Vision", text: "To become a global leader in innovative fashion." },
          { title: "Our Mission", text: "To design high-performance apparel with sustainability." },
          { title: "Our Values", text: "Integrity, innovation, and inclusivity drive every decision." },
          { title: "Why Choose Us?", text: "We prioritize quality, design, and sustainability." },
          { title: "Our Commitment", text: "We are dedicated to sustainability and ethical fashion." },
          { title: "Customer Satisfaction", text: "Your happiness is our priority." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="dark:bg-black bg-white text-black dark:text-white shadow-lg shadow-pink-500 border-pink-600 border-2 p-6 rounded-lg "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2}}
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="dark:text-gray-200 text-black">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission-Driven Section */}
      <motion.div
        className="relative bg-cover bg-center px-6 py-16 text-white"
        style={{ backgroundImage: "url('/unique-g.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <div className="bg-gray-50 px-6 py-16 dark:bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-4 py-2 text-sm font-semibold text-white">
              MISSION-DRIVEN
            </div>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              A Quest To Help Others
            </h2>
          </div>
          <div className="lg:w-1/2">
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
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Aboutsection;