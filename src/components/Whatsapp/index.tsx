import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "03042676153"; // Change to your desired WhatsApp number

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-20 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={openWhatsApp}
          aria-label="Open WhatsApp"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-green-600 hover:shadow-lg"
        >
          <FaWhatsapp size={24}  />
        </div>
      )}
    </div>
  );
}
