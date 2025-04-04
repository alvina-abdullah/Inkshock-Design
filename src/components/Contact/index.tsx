"use client";

import { useState } from "react";
import { FaLocationArrow, FaMailBulk, FaMapPin, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-gray-100 mt-3 py-12 dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mx-auto max-w-6xl rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="mb-8 font-extrabold bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-center text-3xl text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          📞 Contact
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Contact Form */}
          <motion.div
            className="rounded-lg bg-gray-50 dark:bg-black text-black dark:text-white p-6 shadow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <a href="mailto:Theinkshockdesigns@gmail.com"
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 py-3 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Send Message
                </a>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Details */}
            <motion.div
              className="rounded-lg bg-gray-50 dark:bg-black text-black dark:text-white p-6 shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
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

              <a
                href="mailto:Theinkshockdesigns@gmail.com"
                className="hover:underline "
              >
                Theinkshockdesigns@gmail.com
              </a>
              </div>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <iframe
                className="h-64 w-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2395214429963!2d-87.630562!3d41.877932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb77c34aaab%3A0x48e9ef63547bdf5e!2s56%20W%20Van%20Buren%20St%2C%20Chicago%2C%20IL%2060604%2C%20USA!5e0!3m2!1sen!2sus!4v1711023456789"
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
