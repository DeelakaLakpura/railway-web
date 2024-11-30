import React, { useState } from "react";
import Lottie from "react-lottie";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import animationData from "../raw/animation.json";

const App = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen shadow-lg ">
      <motion.div
        className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-gradient-to-b from-green-500 to-green-600 p-8 flex justify-center items-center">
            <Lottie options={defaultOptions} height={400} width={340} />
          </div>

          <div className="p-8 flex justify-center items-center bg-gray-50">
            <div className="w-full max-w-md space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                {isSignup ? "Sign Up" : "Log In"}
              </h2>

              <div className="flex justify-center space-x-4 mb-6">
                <button
                  className={`w-1/2 py-2 px-4 ${!isSignup ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"} rounded-md hover:bg-green-600 transition duration-300`}
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </button>
                <button
                  className={`w-1/2 py-2 px-4 ${isSignup ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"} rounded-md hover:bg-green-600 transition duration-300`}
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Signup Fields */}
                {isSignup && (
                  <>
                    {/* First Name */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaUser className="text-gray-500 mr-2" />
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaUser className="text-gray-500 mr-2" />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaEnvelope className="text-gray-500 mr-2" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaPhoneAlt className="text-gray-500 mr-2" />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaLock className="text-gray-500 mr-2" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaLock className="text-gray-500 mr-2" />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>
                  </>
                )}

                {/* Login Fields */}
                {!isSignup && (
                  <>
                    {/* Email for Login */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaEnvelope className="text-gray-500 mr-2" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500 transition duration-300">
                      <FaLock className="text-gray-500 mr-2" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full outline-none bg-transparent text-gray-700"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {isSignup ? "Sign Up" : "Log In"}
                </motion.button>
              </form>

              {/* Forgot Password Link */}
              {!isSignup && (
                <div className="text-center mt-4">
                  <a href="#" className="text-green-500 hover:text-green-600">
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
