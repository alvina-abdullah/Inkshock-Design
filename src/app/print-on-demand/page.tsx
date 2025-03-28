"use client";
// import Categories from "@/components/Categories";
// import Categories from "../../components/Categories";

import PrintPackages from "@/components/Print-Packages";
import FeatureCards from "@/components/Banner.tsx";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ProductSection from "../Shirts/psge";
import Shirts from "../Shirts/psge";
import TShirts from "../tshirts/page";
import Caps from "../caps/page";
import Hoodies from "../hoodies/page";

const FeatureSection = () => {
  return (
    <div className="group mt-28 dark:to-black dark:text-white">
      {/* <section className="relative h-screen bg-white dark:bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/printpage.jpg?height=1080&width=1920"
            alt="Tattoo art background"
            fill
            className="object-cover brightness-60"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6  bg-gradient-to-r from-pink-600 via-orange-500 to-teal-400 bg-clip-text text-4xl font-bold uppercase tracking-tight text-transparent md:text-6xl lg:text-6xl">
            Welcome to Inkshock Design
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-white md:text-xl">
            At Inkshock Design, we&apos;re dedicated to delivering high-quality,
            comfortable, and stylish apparel that exceeds your expectations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/Theinkshockdesigns@gmail.com"
              className="bg-gradient-to-r from-pink-600 via-orange-500 to-teal-400 px-8 py-3 font-medium text-white transition-colors hover:bg-dark"
            >
              BOOK Now
            </Link>
            <Link
              href="/portfolio"
              className="border border-2 border-pink-600 via-orange-500 to-teal-400 px-8 py-3 font-medium transition-colors text-white hover:bg-pink-600 "
            >
              VIEW OUR WORK
            </Link>
          </div>
        </div>
      </section> */}

      {/* Hero Section */}
      <section className=" flex flex-col items-center justify-between bg-gradient-to-r from-white to-pink-600 px-8 py-12 text-black text-black dark:from-pink-500 dark:text-white md:flex-row md:px-16 lg:px-24">
        {/* Left - Content */}
        <div className="mt-6 w-full md:mt-0 md:w-1/2">
          <p className="flex items-center bg-gradient-to-r from-teal-500 via-orange-600 to-pink-400 bg-clip-text font-bold uppercase text-transparent">
            <span className="mr-2 inline-block h-3 w-3 rounded-sm bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400"></span>
            InkShock Design - Wear Your Passion
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
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
          </h2>

          <p className="mt-4 text-lg">
            At Inkshock Design, we&apos;re dedicated to delivering high-quality,
            comfortable, and stylish apparel that exceeds your expectations,we
            believe fashion is an extension of your personality. Our
            premium-quality, custom-designed let you showcase your unique style
            with bold, eye-catching graphics that turn heads.
          </p>

          <ul className="mt-4 space-y-2 text-lg">
            <li>
              ✔ **High-Quality Cotton** – Soft, breathable, and long-lasting.
            </li>
            <li>
              ✔ **Eco-Friendly Printing** – Vibrant designs that are
              environmentally conscious.
            </li>
            <li>
              ✔ **Exclusive Artwork** – Designs created by top independent
              artists.
            </li>
          </ul>
          <Link href="/packagesn">
            <button className="rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400  px-6 py-3 font-semibold text-white hover:bg-gray-900">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right - Hero Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <iframe
            src="https://assets.pinterest.com/ext/embed.html?id=AYkRR_cZh5bksy8nxpr5zt2W3XdvEJ2AVkIILaOTk0TgJe2zNdQEqEuoh1q5lmnmMSXA8H_iL15emIMnJoU2jAI"
            height="532"
            width="345"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          {/* <Image
            src="/images/print.png"
            alt="Tattoo T-Shirt"
            width={500}
            height={200}
            className="max-w-full rounded-lg"
          /> */}
        </div>
      </section>

      {/* <Categories /> */}

      {/* Features Section */}
      <section className="relative overflow-hidden bg-gray-100 px-8 py-12 dark:bg-black md:px-16 lg:px-24">
        {/* Left Gradient with Animation */}
        <div className="animate-moveLeft absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-pink-600 to-transparent opacity-60"></div>

        {/* Right Gradient with Animation */}
        <div className="animate-moveRight absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-pink-500 to-transparent opacity-60"></div>

        <h2 className="animate-fadeIn relative z-10 text-center text-3xl font-bold">
          Why Choose InkShock Design?
        </h2>

        <div className="relative z-10 mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Premium Fabric",
              desc: "Made from 100% organic cotton, soft & durable.",
            },
            {
              title: "Eco-Friendly Prints",
              desc: "Sustainable, non-toxic ink for long-lasting vibrancy.",
            },
            {
              title: "Custom Designs",
              desc: "Collaborate with artists or create your own.",
            },
            {
              title: "Limited Editions",
              desc: "Exclusive designs you won’t find anywhere else.",
            },
            {
              title: "Fast Shipping",
              desc: "Reliable worldwide delivery to your doorstep.",
            },
            {
              title: "Satisfaction Guaranteed",
              desc: "Love it or your money back!",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-fadeUp rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 ">
          {[
            { title: "Skull Designs", image: "/images/skull.jpg" },
            { title: "Tribal Art", image: "/images/tribal-art.jpg" },
            { title: "Minimalist", image: "/images/minimalist.jpg" },
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-pink-600 bg-white p-6 text-center shadow-md hover:bg-slate-200 dark:bg-black"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <TShirts />
      <Shirts />
      <Hoodies />
      <Caps />
      <PrintPackages />
      <FeatureCards />
    </div>
  );
};

export default FeatureSection;
