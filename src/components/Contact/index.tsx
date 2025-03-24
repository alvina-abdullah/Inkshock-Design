"use client";

import { useState } from "react";
import Link from "next/link";
import { FaLocationArrow, FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-100 mt-3 py-12 dark:bg-black">
      <div className="mx-auto max-w-6xl rounded-lg  bg-white dark:bg-gray-900 p-8 shadow-lg">
        <h2 className="mb-8 font-extrabold bg-gradient-to-r  from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          📞 Contact Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-gray-50 dark:bg-black text-black dark:text-white p-6 shadow">
            <h3 className="mb-4 text-xl  font-semibold text-black dark:text-white">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-black dark:text-white focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-black dark:text-white focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-black dark:text-white focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="flex  w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 py-3 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="rounded-lg bg-gray-50 dark:bg-black text-black dark:text-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-white">
                📍 Our Location
              </h3>
              <div className="flex items-center space-x-3">
                <FaLocationArrow className="text-pink-600" />
                <p className="text-gray-600 dark:text-white">
                  56 W Van buren st, Chicago, IL 60604, United States
                </p>
              </div>
              <div className="mt-3 flex items-center space-x-3">
                <FaPhone className="text-pink-600" />
                <p className="text-gray-600 dark:text-white">+1 815-881-2042</p>
              </div>
              <div className="mt-3 flex items-center space-x-3">
                <FaMailBulk className="text-pink-600" />
                <p className="text-gray-600 dark:text-white">Theinkshockdesigns@gmail.com</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="h-64 w-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2395214429963!2d-87.630562!3d41.877932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb77c34aaab%3A0x48e9ef63547bdf5e!2s56%20W%20Van%20Buren%20St%2C%20Chicago%2C%20IL%2060604%2C%20USA!5e0!3m2!1sen!2sus!4v1711023456789"
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
