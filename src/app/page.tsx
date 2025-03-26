
// import Aboutsection from "@/components/About/Aboutsection";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import WorkSection from "@/components/Work";
import Packages from "@/components/Logo-Packages";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

import ServicesSection from "./services/page";
import ProcessSection from "./process/page";

export const metadata: Metadata = {
  title: "Inshock Design",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ServicesSection/>
      <WorkSection/>
      <ProcessSection/>
      <Packages/>
      
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Aboutsection/> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
