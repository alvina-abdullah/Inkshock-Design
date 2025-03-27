"use client";
import Categories from "@/components/categories";
import BulkDiscountBanner from "@/components/Discountbanner";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const FeatureSection = () => {
  return (
    <div className="mt-28 group dark:to-black dark:text-white">
   
      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-white to-pink-600 text-black dark:from-pink-600 flex flex-col items-center justify-between px-8 py-12 md:flex-row md:px-16 lg:px-24">
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

      
      {/* Features Section */}
      <section className="relative px-8 py-12 md:px-16 lg:px-24 bg-gray-100 dark:bg-black overflow-hidden">
  {/* Left Gradient with Animation */}
  <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-pink-600 to-transparent opacity-60 animate-moveLeft"></div>

  {/* Right Gradient with Animation */}
  <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-pink-500 to-transparent opacity-60 animate-moveRight"></div>

  <h2 className="text-center text-3xl font-bold relative z-10 animate-fadeIn">
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
        className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900 animate-fadeUp"
      >
        <h3 className="text-xl font-bold">{feature.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {feature.desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Shop by Category */}
      <section className="px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Skull Designs", image: "/images/skull.jpg" },
            { title: "Tribal Art", image: "/images/tribal-art.jpg" },
            { title: "Minimalist", image: "/images/minimalist.jpg" },
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-900"
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

      {/* Best Sellers */}
      {/* <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold mb-3 text-black ">
            Top Categories
          </h3>
          <p></p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            
            <div className="p-5 bg-white rounded-lg shadow-md shadow-[#ff7dc9] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Quality.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-4">Full Sleeves T-Shirt</h4>
              <p>
              Casual, cool, and ideal for everyday wear or outdoor activities
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md shadow-[#ff7dc9] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Sustainability.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4 "
              />
              <h4 className="text-xl font-bold mb-4">Full Sleeves Shirt</h4>
              <p>
              Sleek, professional, and perfect for work or a night out
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md shadow-[#ff7dc9] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Community.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-4">Hoodies</h4>
              <p>
              Cozy, confident, and perfect for gym enthusiasts, streetwear lovers, and anyone who loves comfort
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md shadow-[#ff7dc9] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Community.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-4">Caps</h4>
              <p>
              Stylish, versatile, and perfect for adding a finishing touch to your outfit
              </p>
            </div>
          </div>
        </div>
      </section> */}

{/* <Categories/> */}
{/* <BulkDiscountBanner/> */}
    </div>
  );
};

export default FeatureSection;
