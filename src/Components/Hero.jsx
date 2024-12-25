import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-blue-600 text-white py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Exquisite Glassware Crafted with Precision and Innovation
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto herofont"
        >
          Pioneering the art of glassmaking with unparalleled craftsmanship and dedication to quality
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="relative inline-block py-3 px-10 rounded-full font-bold shadow-lg text-blue-900 bg-yellow-400 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Custom CSS Divider (No SVG) */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-r from-blue-600 via-transparent to-transparent h-16"></div>
    </div>
  );
}

export default Hero;
