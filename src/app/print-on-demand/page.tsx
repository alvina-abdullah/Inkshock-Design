"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const FeatureSection = () => {
  return (
    <div className="  mt-28 bg-white text-black dark:bg-black dark:text-white"
    >

      {/* Hero Section */}
      
      <section className="flex flex-col items-center justify-between px-8 py-12 md:flex-row md:px-16 lg:px-24">
        {/* Left - Content */}
        <div className="mt-6 w-full md:mt-0 md:w-1/2">
          <p className="flex items-center font-bold uppercase text-pink-600">
            <span className="mr-2 inline-block h-3 w-3 rounded-sm uppercase bg-pink-500"></span>
            inshock wear
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            <TypeAnimation className="mt-2 text-3xl font-bold leading-tight md:text-5xl"
              sequence={[
                " Wear Your Art. Own Your Style.",
                500,
                "You Print It. We Dream It.",
                500,
                "Wear Your Art. Own Your Style.",
                500,
                "You Print It. We Dream It.",
                500,
                "Wear Your Art. Own Your Style.",
                500,
              ]}
              style={{ fontSize: "40px" }}
              repeat={Infinity}
            />
          </h2>
          <p className=" mt-4 text-lg">
            Custom-designed logos T-shirts by top artists. Unique. Bold. Limited
            edition.
          </p>
          <button className="mt-6 rounded-lg px-6 py-3 font-semibold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-white hover:bg-gray-900">
            Shop Now
          </button>
        </div>

        {/* Right - Hero Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/images/prin.jpg"
            alt="Tattoo T-Shirt"
            width={500}
            height={200}
            className="max-w-full"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className=" px-8 py-12 md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Skull Designs", image: "/category-skull.png" },
            { title: "Tribal Art", image: "/category-tribal.png" },
            { title: "Minimalist", image: "/category-minimalist.png" },
          ].map((category, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md"
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
      </section>

      {/* Featured Products Section */}
      <section className="px-8 py-12 md:px-16 lg:px-24">
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
              className="rounded-lg bg-white p-6 text-center shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.price}</p>
              <button className="mt-4 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-900">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 px-8 py-12 dark:bg-black md:px-16 lg:px-24">
        <h2 className="text-center text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Premium Quality",
              desc: "100% cotton, fade-resistant prints.",
            },
            {
              title: "Limited Editions",
              desc: "Exclusive designs you won’t find elsewhere.",
            },
            {
              title: "Worldwide Shipping",
              desc: "Fast delivery to your doorstep.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      
      <section className="px-8 py-12 md:px-16 lg:px-24">
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
              className="rounded-lg bg-white p-6 text-center shadow-md"
            >
              <p className="mt-2 italic text-gray-600">
              &quot;{testimonial.review}
              </p>
              <h3 className="mt-4 text-lg font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
