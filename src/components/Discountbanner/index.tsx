const BulkDiscountBanner = () => {
  return (
    <section className="relative bg-white dark:bg-black py-16 px-8 md:px-16 lg:px-24 dark:text-white text text-center overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-600 to-black dark:fr opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold animate-fadeIn">
          Ready to buy in bulk & save up to <span className="text-pink-600">30%</span>?
        </h2>
        <p className="mt-2 text-lg text-gray-300 animate-fadeIn">
          Printed and shipped on demand!
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 animate-fadeUp"
        >
          Shop Now →
        </a>
      </div>
    </section>
  );
};

export default BulkDiscountBanner;
