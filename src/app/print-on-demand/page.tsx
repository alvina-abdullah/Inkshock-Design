"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const FeatureSection = () => {
  return (
    <div className="mt-28 group bg-gradient-to-r from-white to-pink-600 text-black dark:from-pink-600 dark:to-black dark:text-white">
   
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-between px-8 py-12 md:flex-row md:px-16 lg:px-24">
        {/* Left - Content */}
        <div className="mt-6 w-full md:mt-0 md:w-1/2">
          <p className="flex items-center font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-orange-600 to-pink-400">
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
            premium-quality, custom-designed let you showcase your
            unique style with bold, eye-catching graphics that turn heads.
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

          <button className="mt-6 rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-6 py-3 font-semibold text-white hover:bg-gray-900">
            Shop Now
          </button>
        </div>

        {/* Right - Hero Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/images/print.png"
            alt="Tattoo T-Shirt"
            width={500}
            height={200}
            className="max-w-full rounded-lg"
          />
        </div>
      </section>

      {/* <section></section> */}
      {/* Features Section */}
      {/* <section className="bg-gray-100 px-8 py-12 dark:bg-black md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">
          Why Choose InkShock Design?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
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
              className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Shop by Category */}
      {/* <section className="px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Skull Designs", image: "/category-skull.png" },
            { title: "Tribal Art", image: "/category-tribal.png" },
            { title: "Minimalist", image: "/category-minimalist.png" },
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">{category.title}</h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* Best Sellers */}
      {/* <section className="px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Best Sellers</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Skull Masterpiece",
              price: "$29.99",
              image: "/tshirt1.png",
            },
            { name: "Ancient Tribal", price: "$32.99", image: "/tshirt2.png" },
            { name: "Minimal Ink", price: "$27.99", image: "/tshirt3.png" },
          ].map((product, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {product.price}
              </p>
              <button className="mt-4 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-900">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section> */}

      {/* Customer Testimonials */}
      {/* <section className="px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              review:
                "Absolutely love the design! Fits perfectly and the print is high quality.",
            },
            {
              name: "Sarah M.",
              review:
                "Got so many compliments. Definitely my favorite T-shirt now!",
            },
            {
              name: "Mike T.",
              review: "Fast shipping and amazing artwork. Worth every penny!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
            >
              <p className="mt-2 italic text-gray-600 dark:text-gray-300">
                &quot;{testimonial.review}&quot;
              </p>
              <h3 className="mt-4 text-lg font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default FeatureSection;
