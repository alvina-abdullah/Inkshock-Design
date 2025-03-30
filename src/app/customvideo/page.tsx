import React from "react";
import Image from "next/image";
import VideoPackages from "@/components/Video-Packages";
const customvideoanimation = () => {
  const projects = [
    {
      title: "Vibrant Branding",
      category: "Web Design",
      image: "/images/web/web1.png?height=400&width=600",
    },
    {
      title: "Modern E-commerce",
      category: "Web Design",
      image: "/images/web/web2.png?height=400&width=600",
    },
    {
      title: "App Interface",
      category: "Web Design",
      image: "/images/web/web3.png?height=400&width=600",
    },
    {
      title: "Product Packaging",
      category: "Web Design",
      image: "/images/web/web4.png?height=400&width=600",
    },
    {
      title: "Custom Illustrations",
      category: "Web Design",
      image: "/images/work/logo5.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web6.png?height=400&width=600",
    },
    {
      title: "Marketing Campaig",
      category: "Web Design",
      image: "/images/web/web7.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/web/web8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/work/logo8.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/work/logo10.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/work/logo11.png?height=400&width=600",
    },
    {
      title: "Marketing Campaign",
      category: "Web Design",
      image: "/images/work/logo12.png?height=400&width=600",
    },
  ];

  return (
    <section
      id="logo"
      className="w-full bg-white py-12 pt-28 dark:bg-zinc-900 md:py-24 lg:py-32"
    >
      <div className="h-40 w-full bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 ">
        <h3 className="pt-16 text-center text-4xl font-extrabold text-white">
          CUSTOM VIDEO ANIMATION
        </h3>
      </div>
      {/* <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12"> */}
      <div className="container mx-auto flex w-full flex-col items-center bg-white px-6 py-16 dark:bg-black md:flex-row md:px-12 lg:px-24">
        {/* Left Side - Text */}
        <div className="text-center md:w-1/2 md:text-left">
          <h2 className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Custom Your Own Video        </h2>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Our video animation services excel at bringing your ideas to life
            through captivating visual storytelling. With expertise in both 2D
            and 3D animation techniques, we create dynamic and engaging videos
            that effectively convey your message. Our skilled team utilizes
            industry-standard software to deliver high-quality animations that
            align seamlessly with your brand identity. Whether you need animated
            videos for marketing, training, or entertainment purposes, our
            services will help you stand out from the crowd and leave a lasting
            impression on your audience. From concept development to final
            production, we are committed to delivering exceptional video
            animation services tailored to your specific needs.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="mt-4 flex justify-center md:mt-0 md:w-1/2">
          <Image
            src="/images/video/video.png" // Replace with your image path
            alt="Graphic Designer Illustration"
            width={1000}
            height={900}
            // className="w-auto h-auto"
          />
        </div>
      </div>
      {/* </section> */}
      {/* <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2"></div>
          <div className="rounded-sm ">
            <h4 className="rounded-sm bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-3 text-4xl font-extrabold text-white">
              WEB DEVELOPMENT
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
                <Link href="#" className="mt-2 inline-flex items-center text-white hover:text-pink-400">
                  View Project <FaChevronCircleRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className=" rounded-sm  bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 px-8 py-3 text-black transition-opacity hover:opacity-90">
            View All Projects
          </button>
        </div>
      </div> */}
      <VideoPackages />
    </section>
  );
};
export default customvideoanimation;
