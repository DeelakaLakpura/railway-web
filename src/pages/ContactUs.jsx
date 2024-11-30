import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import Lottie from "react-lottie";
import Container from "../components/Container";
import contactAnimation from "../raw/contactanimation.json";

const Contact = () => {
  return (
    <>
      <Container className="contact-wrapper py-12 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We'd love to hear from you! Whether you have a question about
              services, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
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
              <button className="w-full py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-all">
                Submit
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="flex justify-center">
            <Lottie
              animationData={contactAnimation}
              loop={true}
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <IoHomeOutline className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sri Lanka Railways Headquarters, Colombo 10, Sri Lanka
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <a href="tel:+94114600111" className="hover:underline">
                  +94 11 4 600 111
                </a>
              </p>
            </div>
          </div>
          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <FaInfoCircle className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Working Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Friday: 10 AM - 8 PM
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Find Us Here
          </h2>
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
        </div>
      </Container>
    </>
  );
};

export default Contact;
