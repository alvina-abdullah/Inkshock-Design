import React from "react";

const logopackages = () => {
  const logopackages = [
    {
      title: "StartUp Logo Package – Affordable & Professional",
      price: "$49",
      oldPrice: "$59",
      description: "Perfect for new businesses looking for a strong brand identity.",
      features: [
        "4 Unique Logo Concepts – Designed to match your vision" ,
        "3 Revisions – Fine-tune your design to perfection",
        "2 Dedicated Designers – Expert creativity at work",
        "48 Hours Turnaround – Quick & efficient delivery",
        "100% Satisfaction & Ownership Rights", 
      ],
    },
    {
      title: "Silver Logo Package – Best Value!",
      price: "$99",
      oldPrice: "$120",
      description: "A comprehensive package with added branding perks.",
      features: [
        " 6 Custom Logo Concepts – More choices, better branding",
        "6 Revisions – Refine your logo until it's perfect",
        "FREE Icon Design & Grayscale Format – Versatility for all uses",
        "FREE Color Options & Vector Files – High-quality files for any medium",
        "4 Creative Designers – More ideas, better results",
        "48 Hours Turnaround – Quick and hassle-free",
        "100% Ownership Rights & Money-Back Guarantee",
      ],
    },
    {
      title: "Gold Logo Package – Ultimate Branding Solution!",
      price: "$199",
      oldPrice: "$250",
      description: "The complete branding package for businesses ready to stand out.",
      features: [
       "12 Unique Logo Concepts – A variety of high-end options",
       "UNLIMITED Revisions – Perfect your logo with no limits",
       "FREE Icon Design, Grayscale & Color Variations – Maximize versatility",
       "FREE File Formats – Includes PSD, PDF, AI, JPEG, PNG, & Vector",
       "Complete Stationery Design – Business Card, Letterhead, Envelope & Invoice",
       "48-72 Hours Turnaround Time – Quality without the wait",
       "100% Ownership Rights & Unique Design Guarantee",
       "💯 100% Satisfaction Guaranteed",
        "💯 Risk-Free Money-Back Guarantee",
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
          {logopackages.map((pkg, index) => (
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

export default logopackages;
