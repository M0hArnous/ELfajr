'use client';

import React from 'react';
import { motion } from 'framer-motion';
import logo from '../Components/images/logo1.jpg';
const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src= {logo}
              alt="Company facility"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              El Fagr Technical Industry is a leading provider of industrial solutions and technical equipment. 
              With years of experience in the field, we specialize in delivering high-quality products and 
              services to meet the diverse needs of our clients.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Our commitment to excellence and innovation has established us as a trusted partner in the 
              industry, serving clients across various sectors with reliable and efficient solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>State-of-the-art manufacturing facilities</li>
              <li>Experienced team of engineers and technicians</li>
              <li>Commitment to quality and customer satisfaction</li>
              <li>Continuous innovation and improvement</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
