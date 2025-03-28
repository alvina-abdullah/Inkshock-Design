"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const option = [
  { name: "T-Shirts", image: "/images/categories/tshirt.jpeg", bg: "bg-pink-600" },
  { name: "Shirts", image: "/images/categories/shirt.jpeg", bg: "bg-orange-400" },
  { name: "Hoodies", image: "/images/categories/hoodie.jpeg", bg: "bg-yellow" },
  { name: "Caps", image: "/images/categories/caps.jpeg", bg: "bg-teal-300" },
];
const Categories = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200);
  }, []);

  return (
    <section className="bg-white  dark:bg-black py-16 px-8 md:px-16 lg:px-24 text-black dark:text-white text-center">
      <h2 className="text-3xl font-bold animate-fadeIn">Top Categories</h2>
      <p className="mt-2 dark:text-gray-200 text-gray-700  animate-fadeIn">
        Inkshock features a wide range of personalized products.  
        From trendy apparel to unique creations, explore our selection today.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {option.map((category, index) => (
          <div
            key={index}
            className={`relative group rounded-lg p-4 shadow-md overflow-hidden transition-transform duration-300 ${
              category.bg
            } ${animate ? "animate-fadeUp" : "opacity-0"}`}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm font-semibold px-4 py-2 rounded shadow-md">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
