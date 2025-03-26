import React from "react";

const webpackages = () => {
  const webpackages = [
    {
      title: "Startup Success Package",
      price: "$299",
      oldPrice: "$399",
      description: "A professional online presence to get your business started.",
      features: [
        "3-Page Custom Website – Designed to fit your brand and business goals" ,
        " 3 Engaging Banner Designs – Creative and impactful visuals",
        "5 High-Resolution Stock Photos – Royalty-free and premium quality",
        "Interactive jQuery Slider – Smooth transitions for an engaging user experience",
        "FREE Google-Friendly Sitemap – Helps with search engine ranking", 
        "W3C Certified HTML – Clean, professional coding",
        "Fast Turnaround – Quick delivery to get your business online",
        "Social Media Branding: Facebook, Twitter & YouTube Page Design",
        "🔹 100% Unique & Custom Design Guarantee",
        "🔹 100% Satisfaction Guarantee",
        "🔹 100% Money-Back Guarantee",
      ],
    },
    {
      title: "Professional Growth Package",
      price: "$399",
      oldPrice: "$420",
      description: "A dynamic website with more functionality & branding power.",
      features: [
        "5-Page Custom Website – Unique and user-friendly design",
        "CMS/Admin Panel – Easily manage & update your site",
        "8 Premium Stock Photos + 5 Banner Designs – Stunning visuals",
        "Interactive jQuery Slider – Engaging animations",
        "FREE Google-Friendly Sitemap – Enhances SEO performance",
        "W3C Certified HTML – High-quality development",
        "48-72 Hours Turnaround – Quick and efficient delivery",
        "Social Media Setup – Facebook, Twitter & YouTube branding",
        " Complete Website Deployment – Ready to go live",
        "🔹 100% Unique Design & Customization",
        "🔹 100% Satisfaction Guarantee",
"🔹 100% Money-Back Guarantee",
      ],
    },
    {
      title: "Premium Business Package ",
      price: "$799",
      oldPrice: "$850",
      description: "The ultimate website solution for businesses ready to dominate online.",
      features: [
       "10-Page Fully Customized Website – Professional, modern & sleek",
       "Conceptual & Dynamic Design – Built to impress and engage",
       "Online Payment Integration – Secure transactions for your customers",
       "Content Management System (CMS) – Easy-to-use backend for updates",
       "Mobile-Responsive Design – Seamless experience on all devices",
       "Lead Capturing Forms – Convert visitors into customers",
       "Newsletter & Newsfeed Integration – Keep your audience engaged",
       "Social Media Integration – Connect your brand across platforms",
       "Search Engine Submission – Boosts online visibility",
       "5 Premium Stock Photos + 3 Unique Banners – High-quality visuals",
       "1 jQuery Slider Banner – Smooth, interactive animations",
       "W3C Certified HTML – Clean, professional coding",
       "48-72 Hours Turnaround Time – Fast, efficient delivery",
       "Complete Branding & Social Media Setup – Facebook, Twitter & YouTube",
       "🔹 100% Unique, Custom-Tailored Design",
       "🔹 100% Satisfaction Guarantee",
       "🔹 100% Money-Back Guarantee",

      ],
    },
  ];

  return (
    
    <section className="bg-gray-100 dark:bg-black py-24 ">
          {/* <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 h-40 w-full ">
        <h3 className="text-center text-white pt-16 text-4xl font-extrabold">Packages</h3>
        </div> */}
      <div className="max-w-6xl mx-auto px-6">
      <h3 className="pt-11 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-center mb-16 font-extrabold text-5xl">Our Pricing Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {webpackages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-black  text-black dark:text-white p-8 rounded-2xl shadow-lg border border-gray-800 dark:border-white"
            >
              <h3 className="text-lg font-semibold uppercase text-center">{pkg.title}</h3>
              <p className="text-4xl font-bold text-center my-2">{pkg.price}</p>
              <p className="text-gray-400 text-center line-through">{pkg.oldPrice}</p>
              <p className="text-gray-400 text-center ">{pkg.description}</p>
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

export default webpackages;
