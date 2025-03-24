"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gradient-to-tl to-zinc-900 from-black md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(45,212,191,0.2),transparent_40%)]"></div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-[800px] text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="mb-5 text-3xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
              >
                Creative Design Solutions That Make an Impact
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="mb-12 text-base !leading-relaxed text-black dark:text-white sm:text-lg md:text-xl"
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
                <button className="cursor-pointer ">
                <Link
                  href="/portfolio"
                  className="cursor-pointer rounded-sm bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  View Our Work
                </Link>
                </button>
                <button className="cursor-pointer ">
                <Link
                  href="/packages"
                  className="inline-block rounded-sm border border-pink-500 via-orange-400 to-teal-400 px-8 py-4 text-base font-semibold text-black dark:text-white duration-300 ease-in-out"
                >
                  Get Started
                </Link>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
