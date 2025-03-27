import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-pink-600 to-black dark:from-black dark:via-pink-600 to-white text-white py-20 px-8 text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-purpleGlow to-transparent opacity-50 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold">
          Studio Pley Studic
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Bringing futuristic and elegant designs for creative minds.
        </p>

        {/* Call to Action Button */}
        <Link href="/" className="mt-8 bg-neonPink px-6 py-3 rounded-full text-white text-lg font-semibold shadow-lg transition-all hover:scale-105">
          Get Started →
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
