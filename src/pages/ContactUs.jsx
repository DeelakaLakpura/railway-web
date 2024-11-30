import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneAlt, FaInfoCircle, FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/Container";
import contactImage from "../images/contact/contact-image.png"; // Corrected image path

const Contact = () => {
  return (
    <Container className="contact-wrapper flex justify-center items-center py-12 px-4 md:px-12 lg:px-24 min-h-screen bg-gradient-to-r from-green-300 via-green-500 to-green-700">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-white">Contact Us</h1>
        <p className="text-white mt-4">We're here to help you! Feel free to reach out for any inquiries or support.</p>
      </motion.div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md shadow-md hover:from-green-700 hover:to-green-800 transition-all">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full max-w-md lg:max-w-lg rounded-md shadow-lg"
          />
        </motion.div>
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Address */}
        <div className="flex items-start space-x-4">
          <IoHomeOutline className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Address</h3>
            <p className="text-white">
              Sri Lanka Railways Headquarters, Colombo 10, Sri Lanka
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <FaPhoneAlt className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Phone</h3>
            <p className="text-white">
              <a href="tel:+94114600111" className="hover:underline">
                +94 11 4 600 111
              </a>
            </p>
          </div>
        </div>
        {/* Working Hours */}
        <div className="flex items-start space-x-4">
          <FaInfoCircle className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-xl font-semibold text-white">Working Hours</h3>
            <p className="text-white">Monday - Friday: 10 AM - 8 PM</p>
          </div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-green-500 hover:text-white transition-all">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="https://twitter.com" className="text-green-500 hover:text-white transition-all">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="mailto:contact@yourcompany.com" className="text-green-500 hover:text-white transition-all">
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </motion.div>

      {/* Google Maps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6564279524914!2d79.85764507448283!3d6.931604918287424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591a5e7013f5%3A0x78dae6d63e1f980f!2sSri%20Lanka%20Railway%20Head%20Quarters!5e0!3m2!1sen!2slk!4v1730613052060!5m2!1sen!2slk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="rounded-md shadow-lg"
        ></iframe>
      </motion.div>
    </Container>
  );
};

export default Contact;
