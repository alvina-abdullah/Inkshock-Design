import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

const WorkSection = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "logo",
      image: "/images/work/logo1.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "logo",
      image: "/images/work/logo2.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "logo",
      image: "/images/work/logo3.png?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "logo",
      image: "/images/work/logo4.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "logo",
      image: "/images/work/logo5.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "logo",
      image: "/images/work/logo6.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "logo",
      image: "/images/work/logo7.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "",
      image: "/images/work/logo8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo9.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo10.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo11.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo12.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo13.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo14.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo15.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo16.png?height=400&width=600",
    },

  ];

  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-orange-400 font-medium">
              Our Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              Showcasing our creative portfolio
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at some of our recent projects and see how we have helped businesses like yours make an impact.
            </p>
          </div>
          <div className="rounded-sm">
            <h4 className="text-4xl px-8 py-3 rounded-sm text-white font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">
              LOGOS
            </h4>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-sm font-medium text-pink-500">{project.category}</div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <Link href="#" className="mt-2 inline-flex items-center text-white hover:text-pink-400">
                  View Project <FaChevronCircleRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="rounded-sm px-8 py-3 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-black hover:opacity-90 transition-opacity">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  
  );
};

export default WorkSection;