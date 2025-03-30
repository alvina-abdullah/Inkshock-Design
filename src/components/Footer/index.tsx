"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 dark:bg-black bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 ">
              <Image
                src="/images/logo/logo.png"
                alt="InkShock Design Logo"
                width={120}
                height={48}
                className="h-auto"
              />
            </div>
            <p className="text-sm text-black dark:text-white">Creative design solutions that make an impact.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-black dark:text-white">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/customlogo" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
              Logo Design
              </Link>
              <Link href="/customweb" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Web Design
              </Link>
              <Link href="/custombranding" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Branding & Identity
              </Link>
              <Link href="/customvideo" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Video Animation
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-black dark:text-white">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Portfolio
              </Link>
              <Link href="/packages" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Packages
              </Link>
              <Link href="/contact" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-black dark:text-white">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/inshock-apparel" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Inshock Apparel
              </Link>
              <Link href="/services" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Services
              </Link>
              <Link href="/process" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
              Process
              </Link>
              <Link href="/testimonials" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
              Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-black dark:text-white">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-black dark:text-white hover:text-pink-500 transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-6 md:flex-row">
          <p className="text-sm text-black dark:text-white">© 2020 InkShock Design. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-black dark:text-white hover:text-pink-500 transition-colors">
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-black dark:text-white hover:tetext-black dark:text-white transition-colors">
              <FaFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-black dark:text-white hover:text-black dark:text-white transition-colors">
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-black dark:text-white hover:tetext-black dark:text-white transition-colors">
              <FaLinkedinIn className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
    export default Footer;