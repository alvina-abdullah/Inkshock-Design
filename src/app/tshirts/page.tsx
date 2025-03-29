"use client";
import Image from "next/image";

const products = [
  {
    // name: "Vertical Striped Shirt",
    image: "/images/tshirts/tshirts1.jpg",
  },
  {
    // name: "Courage Graphic T-shirt",
    image: "/images/tshirts/tshirts2.jpg",
  },
  {
    // name: "Loose Fit Bermuda Shorts",
    image: "/images/tshirts/tshirts3.jpg",
  },
  {
    // name: "Faded Skinny Jean",
    image: "/images/tshirts/tshirts4.jpg",
  },
];

const TShirts = () => {
  return (
    <section className="bg-white px-8 py-16 dark:bg-black md:px-16 lg:px-24">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold uppercase text-black dark:text-white">
        T-Shirts
      </h2>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-100 p-6 text-center shadow-md"
          >
            {/* Product Image */}
            <div className="relative mx-auto">
              <Image
                src={product.image}
                alt={product.image}
                width={300}
                height={250}
                className="h-60 w-full object-contain"
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

export default TShirts;
