import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import BrandingPackages from "@/components/Branding-Packages";
const Branding = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "Web Design",
      image: "/images/branding/branding1.jpeg?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "Web Design",
      image: "/images/branding/branding2.jpeg?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "Web Design",
      image: "/images/branding/branding3.jpeg?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "Web Design",
      image: "/images/branding/branding4.jpeg?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "Web Design",
      image: "/images/branding/branding5.jpeg?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/branding/branding6.jpeg?height=400&width=600",
    },
    {
      title: "Marketing Campaig",
      category: "Web Design",
      image: "/images/branding/branding7.jpeg?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/branding/branding8.jpeg?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/branding/branding9.jpeg?height=400&width=600",
    },
  ];

  return (
    <section
      id="logo"
      className="w-full bg-white py-12 pt-28 dark:bg-zinc-900 md:py-24 lg:py-32"
    >
      <div className="h-40 w-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 ">
        <h3 className="pt-16 text-center text-4xl font-extrabold text-white">
         CUSTOM BRANDING
        </h3>
      </div>
      <section className="flex flex-col items-center justify-between px-6 py-12 md:flex-row md:px-16">
        <div className="md:w-1/2">
          <Image
            src="/images/branding.png"
            alt="Web Development Illustration"
            width={500}
            height={400}
            className="max-w-full"
          />
        </div>
        <div className="text-black dark:text-white md:w-1/2">
          <h2 className="mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
           Branding Your Bussiness
          </h2>
          <p className="text-lg leading-relaxed">
            Our Business Branding services are designed to establish a strong
            and distinctive identity for your company. We collaborate closely
            with you to understand your values, target audience, and goals,
            ensuring that our branding strategies align seamlessly with your
            vision. From creating memorable logos and visual assets to
            developing cohesive brand guidelines, we craft a consistent and
            compelling brand presence across all touchpoints. Our team of
            experienced designers and strategists employs market research and
            industry insights to position your business uniquely and effectively
            communicate your value proposition. With our Business Branding
            services, we help you make a lasting impression and stand out in a
            competitive market.
          </p>
        </div>
      </section>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2"></div>
          <div className="rounded-sm ">
            <h4 className="rounded-sm uppercase bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-3 text-4xl font-extrabold text-white">
              Branding
            </h4>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-sm font-medium text-pink-500">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                {/* <Link href="#" className="mt-2 inline-flex items-center text-white hover:text-pink-400">
                  View Project <FaChevronCircleRight className="ml-1 h-4 w-4" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className=" rounded-sm  bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-3 text-black transition-opacity hover:opacity-90">
            View All Projects
          </button>
        </div>
      </div>
      <BrandingPackages />
    </section>
  );
};
export default Branding;
