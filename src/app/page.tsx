import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "./testimonials/page";
import { Metadata } from "next";
import WorkSection from "./work";
import ServicesSection from "./services/page";
import ProcessSection from "./process/page";
import Tabnavigation from "@/components/Tabnavigation";

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
      <ServicesSection />
      <WorkSection />
      <Tabnavigation/>
      <ProcessSection />
      <Testimonials />
      <Contact />
      
    </>
  );
}
