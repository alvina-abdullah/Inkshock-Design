import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaChevronCircleRight } from "react-icons/fa"

const Customlogo = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "Brand Identity",
      image: "/images/work/logo1.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "Web Design",
      image: "/images/work/logo2.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "UI/UX Design",
      image: "/images/work/logo3.png?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "Print Design",
      image: "/images/work/logo4.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "Illustration",
      image: "/images/work/logo5.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo6.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo7.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Branding & Digital",
      image: "/images/work/logo8.png?height=400&width=600",
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
  ]

  return (
    <section id="logo" className="w-full pt-28 py-12 md:py-24 lg:py-32 dark:bg-zinc-900 bg-white">
      <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">CUSTOM WEB DEVELOPMENT</h3>
        </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
          
          </div>
          <div className="rounded-sm ">
            <h4 className="text-4xl px-8 py-3 rounded-sm text-white font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400">CUSTOM WEB DEVELOPMENT</h4></div>
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
          <button className=" rounded-sm  px-8 py-3 bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-black hover:opacity-90 transition-opacity">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
export default Customlogo;