import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-pink-600 to-black to-white px-8 py-20 text-center text-white dark:from-black dark:via-pink-600">
      {/* Background Glow */}
      <div className="bg-gradient-radial from-purpleGlow absolute inset-0 to-transparent opacity-50 blur-3xl"></div>

      {/* Content */}
      <div className="animate-fadeIn relative z-10 mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold md:text-5xl">Join Our Community</h1>
        <p className="mt-4 text-lg text-gray-300">
          Experience the perfect blend of comfort, style, and self-expression
          with Inkshock Design. Join our community today!
        </p>

        {/* Call to Action Button */}
        <Link
          href="/"
          className="bg-neonPink mt-8 rounded-full px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105"
        >
          Get Started →
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
