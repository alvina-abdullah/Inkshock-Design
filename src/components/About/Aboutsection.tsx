import Image from "next/image";

const Aboutsection = () => {
  return (
    <div className="bg-gray-100 dark:bg-black mt-9">
      {/* Header Section */}
      <div className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 dark:bg-black py-16 text-center text-white">
        <h1 className="text-4xl font-bold">ABOUT US</h1>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h3 className=" font-bold text-black dark:text-white">ABOUT</h3>
          <h2 className="text-3xl font-bold text-black dark:text-white">Inkshock Design</h2>
          <p className="text-black dark:text-white mt-4">
            Inkshock Design is a leading graphic design and web development agency based in the USA. 
            With over 10 years of experience in the online design industry, we have been recognized 
            for our exceptional work and commitment to client satisfaction.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image src="/images/about/image.png" width={600} height={400} alt="About Us" className="rounded-lg" />
        </div>
      </div>

      {/* What Makes Us Unique Section */}
      <div className="relative bg-cover bg-center py-16 px-6 text-white" style={{ backgroundImage: "url('/unique-bg.png')" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-black dark:text-white px-4 py-2 inline-block rounded-full text-sm font-semibold">
          Inkshock Design
          </div>
          <h2 className="text-4xl font-bold mt-4 text-black dark:text-white">What Makes Inkshock Design Unique</h2>
          <p className="mt-4 text-lg text-black dark:text-white">
            Gone are the days when obtaining a logo required extensive collaboration with an 
            advertising agency or freelance designer, often resulting in exorbitant costs and 
            lengthy timelines. At Next Designs Lab, we believe in empowering business owners 
            to create their own logos with complete control, flexibility, and convenience.
          </p>
          <ul className="mt-6 text-left text-lg space-y-2 text-black dark:text-white">
            <li>✔ Extensive collection of logo icons tailored to every major industry</li>
            <li>✔ Vast selection of fonts and colors to match your brand’s personality</li>
            <li>✔ Unlimited logo creation possibilities</li>
            <li>✔ Downloadable image files in various formats (PNG, JPG, GIF, EPS)</li>
            <li>✔ On-site access to promotional products showcasing your logo</li>
            <li>✔ Option to choose a domain name and build a website seamlessly</li>
          </ul>
          <p className="mt-6 text-black dark:text-white">
            We also recognize that some business owners prefer to leave the design process to professionals. 
            Hence, we offer in-house design expertise at a fraction of the cost charged by traditional agencies.
          </p>
        </div>
      </div>

      {/* Mission-Driven Section */}
      <div className="bg-white dark:bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className=" bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 text-white px-4 py-2 inline-block rounded-full text-sm font-semibold">
              MISSION-DRIVEN
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white mt-4">A Quest To Help Others</h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-black dark:text-white">
              At Inkshock Design, we are committed to assisting small and medium-sized business 
              owners in creating logos they truly adore and take pride in. We understand that naming 
              a brand, crafting a company slogan, and conveying the right message to consumers can 
              be both exciting and overwhelming. Recognizing the time-consuming nature of starting 
              or rebranding a business, our goal is to streamline the process, reduce costs, and 
              deliver high-quality logos and marketing products that not only turn heads but also 
              enhance brand awareness.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Founder Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <Image src="/founder-image.png" width={500} height={400} alt="Muhammad Tabish" className="rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400text-green-500 font-bold">MEET OUR FOUNDER</h3>
          <h2 className="text-3xl font-bold text-gray-900">Muhammad Owais</h2>
          <p className="text-gray-700 mt-4">
            Muhammad Owais, the founder of Inkshock Design, is the creative genius behind our agency's success. 
            With a genuine passion for design, he has turned our agency into a go-to destination for top-notch work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
