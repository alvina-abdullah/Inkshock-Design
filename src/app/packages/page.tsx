import React from "react";
import Packages from "@/components/Logo-Packages";
const PricingSection = () => {
return(
  <>
  <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full mt-28 ">
  <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
  </div>
  <p className="text-center">Logos Packages</p>
  <Packages/>
  </>
)
}
export default PricingSection;
