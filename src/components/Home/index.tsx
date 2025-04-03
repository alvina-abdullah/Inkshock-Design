"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  { image: "/images/slide1.jpeg" },
  { image: "/images/slide2.jpeg" },
  { image: "/images/slide3.jpeg" },
  { image: "/images/slide1.jpeg" },
];

const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Side: Swiper */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-[400px] md:w-[500px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={slide.image}
                  alt="Custom Shirt"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-2">
          <h3 className="text-sm uppercase text-teal-400 font-medium">INKShock design </h3>
          <h2 className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-teal-400">
            InkShock Design - Wear Your Passion
          
          </h2>
          <motion.h2
            className=" text-3xl font-bold leading-tight md:text-5xl text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                "Wear Your Art. Own Your Style.",
                1000,
                "You Print It. We Dream It.",
                1000,
                "Express Yourself with Every Thread.",
                1000,
              ]}
              style={{ fontSize: "40px" }}
              repeat={Infinity}
            />
          </motion.h2>
          <p className="text-black dark:text-white ">
            At Inkshock Design, we&apos;re dedicated to delivering high-quality,
            comfortable, and stylish apparel that exceeds your expectations.
            We believe fashion is an extension of your personality. Our
            premium-quality, custom-designed let you showcase your unique style
            with bold, eye-catching graphics that turn heads.
          </p>
    <Link href="/packages">
            <button className="mt-3 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 hover:text-black text-white font-medium px-6 py-3 rounded-lg">
            Get Started Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;