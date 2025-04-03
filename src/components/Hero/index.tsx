"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
        className="absolute inset-0 -z-10 opacity-60 transition-all duration-300"
        style={{
          backgroundImage: `
            linear-gradient(115deg, rgb(211, 255, 215), rgb(0, 0, 0)), 
            radial-gradient(90% 100% at ${mousePos.x}px ${mousePos.y}px, rgb(200, 200, 200), rgb(22, 0, 45)), 
            radial-gradient(100% 100% at ${mousePos.x - 80}px ${mousePos.y}px, rgb(250, 255, 0), rgb(36, 0, 0)), 
            radial-gradient(150% 210% at ${mousePos.x + 100}px ${mousePos.y}px, rgb(20, 175, 125), rgb(0, 10, 255)), 
            radial-gradient(100% 100% at ${mousePos.x - 100}px ${mousePos.y - 30}px, rgb(255, 77, 0), rgb(0, 200, 255)), 
            linear-gradient(60deg, rgb(255, 0, 0), rgb(120, 86, 255))
          `,
          backgroundBlendMode:
            "overlay, overlay, difference, difference, difference, normal",
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
            className="mb-5 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl"
          >
            <TypeAnimation
              sequence={[
                "Creative Design Solutions That Make an Impact.",
                1000,
                "Crafting compelling designs, prints, logos, and branding.",
                1000,
                "Designing bold visuals to amplify your brand.",
                1000,
              ]}
              style={{ fontSize: "40px" }}
              repeat={Infinity}
            />
  
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mb-12 text-base text-white sm:text-lg md:text-xl"
          >
            We bring your ideas to life with bold, vibrant designs that capture
            attention and drive results. From branding to web design, we&apos;ve
            got you covered.
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
                className="inline-block rounded-sm border border-pink-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
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
// "use client";

// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image from "next/image";

// const slides = [
//   {
//     image: "/images/work/logo8.png",
//     title: "Illustration Logo Design",
//     subtitle:
//       "We specialize in turning your brand's story and values into captivating illustrations that leave a lasting impression.",
//     buttonText: "Get Started",
//   },
//   {
//     image: "/images/work/logo9.png",
//     title: "2D Logo Design",
//     subtitle: "Look different, love the experience!",
//     buttonText: "Get Started",
//   },
//   {
//     image: "/images/work/logo18.png",
//     title: "Create your website and start business today.",
//     subtitle: "Look different, love the experience!",
//     buttonText: "Get Started",
//   },
//   {
//     image: "/images/image.png",
//     title: "2D Logo Design",
//     subtitle: "Look different, love the experience!",
//     buttonText: "Get Started",
//   },
//   {
//     image: "/images/work/logo7.png",
//     title: "Create your website and start business today.",
//     subtitle:
//       "We specialize in turning your brand's story and values into captivating illustrations that leave a lasting impression.",
//     buttonText: "Get Started",
//   },
// ];

// const Hero = () => {
//   // State to track mouse position
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative w-full h-screen pt-28">
//       {/* Dynamic Background Layer */}
//       <div
//         className="absolute inset-0 -z-10 transition-all duration-300 opacity-60"
//         style={{
//           backgroundImage: `
//             linear-gradient(115deg, rgb(211, 255, 215), rgb(0, 0, 0)),
//             radial-gradient(90% 100% at ${mousePos.x}px ${mousePos.y}px, rgb(200, 200, 200), rgb(22, 0, 45)),
//             radial-gradient(100% 100% at ${mousePos.x - 80}px ${mousePos.y}px, rgb(250, 255, 0), rgb(36, 0, 0)),
//             radial-gradient(150% 210% at ${mousePos.x + 100}px ${mousePos.y}px, rgb(20, 175, 125), rgb(0, 10, 255)),
//             radial-gradient(100% 100% at ${mousePos.x - 100}px ${mousePos.y - 30}px, rgb(255, 77, 0), rgb(0, 200, 255)),
//             linear-gradient(60deg, rgb(255, 0, 0), rgb(120, 86, 255))
//           `,
//           backgroundBlendMode: "overlay, overlay, difference, difference, difference, normal",
//         }}
//       />

//       {/* Swiper Slider */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-screen">
//               {/* Background Image */}
//               <Image
//                 src={slide.image}
//                 alt={`Slide ${index + 1}`}
//                 fill
//                 style={{ objectFit: "cover" }}
//                 className="brightness-80"
//               />

//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20 text-white">
//                 <h1 className="text-2xl md:text-4xl font-extrabold uppercase">
//                   {slide.title}
//                 </h1>
//                 <p className="mt-3 text-lg md:text-xl max-w-xl">
//                   {slide.subtitle}
//                 </p>
//                 <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-600 text-white font-semibold text-lg rounded-lg flex items-center hover:bg-white transition">
//                   {slide.buttonText}
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;
