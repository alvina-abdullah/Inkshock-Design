import React from "react";
import LogoPackages from "@/components/Logo-Packages";
import WebPackages from "@/components/Web-Packages";
import BrandingPackages from "@/components/Branding-Packages";
const PricingSection = () => {
return(
  <>
  <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full mt-28 ">
  <h3 className="text-center text-white pt-16 text-4xl font-extrabold uppercase">Our Pricing Packages</h3>
  </div>
  <LogoPackages/>
  <WebPackages/>
  <BrandingPackages/>
  </>
)
}
export default PricingSection;
