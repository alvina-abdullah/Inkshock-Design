import React from "react";

const PricingSection = () => {
  const packages = [
    {
      title: "  Start Up Website Package",
      price: "$299",
      oldPrice: "$99",
      features: [
        "Package Web Design & Branding Package" ,
        "3-Page Professional Website (Tailored to Your Business Needs)",
        "3 Custom Banner Designs (Creative & Impactful Visuals)",
        "5 Premium Stock Photos (High-Resolution & Royalty-Free)",
        "1 jQuery Slider Banner(Interactive & Smooth Transitions)", 
        "FREE Google-Friendly Sitemap" ,
        "Complete W3C Certified HTML",
        "Super-Fast Turnaround ",
        "Social Media Branding",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Channel Design",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money-Back Guarantee",
      ],
    },
    {
      title: "Professional Website Package",
      price: "$399",
      oldPrice: "$140",
      features: [
        "5 Unique URLs Website",
        "CMS / Admin Panel Support",
        "8 Stock Images + 5 Banner Designs",
        "1 jQuery Slider Banner",
        "FREE Google-Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48-72 Hours Turnaround Time",
        "Facebook, Twitter, & YouTube Page Setup",
        "Complete Deployment",
        
        "🔹 100% Satisfaction Guarantee",
        "🔹 100% Unique Design Guarantee",
        "🔹 100% Money-Back Guarantee*",
      ],
    },
    {
      title: "GOLD LOGO PACKAGE",
      price: "$199",
      oldPrice: "$250",
      features: [
        "12 Logo Concepts",
        "UNLIMITED Revisions",
        "FREE Icon Design",
        "FREE Grayscale Format",
        "FREE Color Options",
        "FREE File Formats (PSD, PDF, AI, JPEG, PNG)",
        "FREE Vector Files",
        "Stationery Design (Business Card, Letterhead, Envelope, Invoice)",
        "48 Hours Turnaround Time",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "48 to 72 hours TAT",
      ],
    },
  ];

  return (
    
    <section className="bg-gray-100 dark:bg-black py-24 ">
       <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-center mb-16 font-extrabold text-5xl">Our Pricing Packages</h3>
       
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-black  text-black dark:text-white p-8 rounded-2xl shadow-lg border border-gray-800 dark:border-white"
            >
              <h3 className="text-lg font-semibold uppercase text-center">{pkg.title}</h3>
              <p className="text-4xl font-bold text-center my-2">{pkg.price}</p>
              <p className="text-gray-400 text-center line-through">{pkg.oldPrice}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full  text-black font-bold py-2 rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 hover:bg-green-600 transition">
                Buy Now 
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  );
};

export default PricingSection;
