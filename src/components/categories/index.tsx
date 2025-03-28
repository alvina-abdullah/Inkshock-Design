"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const allCategories = [
  { name: "T-Shirts", image: "/images/category/tshirt.jpeg", bg: "bg-pink-600" },
  { name: "Shirts", image: "/images/category/shirt.jpeg", bg: "bg-orange-400" },
  { name: "Hoodies", image: "/images/category/hoodie.jpeg", bg: "bg-yellow" }, // Fixed color
  { name: "Caps", image: "/images/category/caps.jpeg", bg: "bg-teal-300" },
];

const Categories = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []);

  return (
    <section className="bg-white dark:bg-black py-16 px-8 md:px-16 lg:px-24 text-black dark:text-white text-center">
      <h2 className="text-3xl font-bold transition-all duration-700 ease-in-out">
        Top Categories
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-200  transition-opacity duration-700 ease-in-out delay-200">
        Inkshock features a wide range of personalized products.  
        From trendy apparel to unique creations, explore our selection today.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {allCategories.map((category, index) => (
          <div
            key={index}
            className={`relative group rounded-lg p-4 shadow-md overflow-hidden transition-all duration-700 ease-in-out transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${category.bg}`}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black dark:bg-white dark:text-black text-sm font-semibold px-4 py-2 rounded shadow-md">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
