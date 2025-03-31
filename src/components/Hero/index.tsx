"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Dynamic Background Layer */}
      <div
        className="absolute inset-0 -z-10 transition-all duration-300 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(115deg, rgb(211, 255, 215), rgb(0, 0, 0)), 
            radial-gradient(90% 100% at ${mousePos.x}px ${mousePos.y}px, rgb(200, 200, 200), rgb(22, 0, 45)), 
            radial-gradient(100% 100% at ${mousePos.x - 80}px ${mousePos.y}px, rgb(250, 255, 0), rgb(36, 0, 0)), 
            radial-gradient(150% 210% at ${mousePos.x + 100}px ${mousePos.y}px, rgb(20, 175, 125), rgb(0, 10, 255)), 
            radial-gradient(100% 100% at ${mousePos.x - 100}px ${mousePos.y - 30}px, rgb(255, 77, 0), rgb(0, 200, 255)), 
            linear-gradient(60deg, rgb(255, 0, 0), rgb(120, 86, 255))
          `,
          backgroundBlendMode: "overlay, overlay, difference, difference, difference, normal",
        }}
      />

      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-[800px]"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mb-5 text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 sm:text-4xl md:text-5xl"
          >
            Creative Design Solutions That Make an Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mb-12 text-base text-black dark:text-white sm:text-lg md:text-xl"
          >
            We bring your ideas to life with bold, vibrant designs that
            capture attention and drive results. From branding to web
            design, we&apos;ve got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <button className="cursor-pointer rounded-sm bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">
              <Link href="/portfolio">View Our Work</Link>
            </button>

            <button className="cursor-pointer">
              <Link
                href="/packages"
                className="inline-block rounded-sm border border-pink-500 px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out"
              >
                Get Started
              </Link>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
