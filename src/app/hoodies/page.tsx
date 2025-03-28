"use client";
import Image from "next/image";

const products = [
  {
    // name: "Vertical Striped Shirt",
    image: "/images/hoodies/hoodie1.jpg",
  },
  {
    // name: "Courage Graphic T-shirt",
    image: "/images/hoodies/hoodie2.jpg",
  },
  {
    // name: "Loose Fit Bermuda Shorts",
    image: "/images/hoodies/hoodie3.jpg",
  },
  {
    // name: "Faded Skinny Jean",
    image: "/images/hoodies/hoodie4.jpg",
  },
];

const Hoodies = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 bg-white dark:bg-black">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-black dark:text-white uppercase">hoodies</h2>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-6 text-center shadow-md">
            {/* Product Image */}
            <div className="relative mx-auto">
              <Image
                src={product.image}
                alt={product.image}
                width={300}
                height={250}
                className="object-contain w-full h-60"
              />
            </div>

            {/* Product Info */}
            {/* <h3 className="font-semibold mt-4 text-lg text-black">{product.name}</h3> */}

          </div>
        ))}
      </div>
    </section>

  );
};

export default Hoodies;
