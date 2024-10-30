import React from 'react';
import he from "/src/assets/he.jpeg";
import { motion } from "framer-motion";
import { SlideRight } from '../../utility/animation';

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
      {/* Brand Info */}
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
        <div className="text-center md:text-left space-y-6">
          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className='text-orange-600 uppercase font-semibold'
          >
            100% Satisfaction Guarantee
          </motion.p>
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className='text-5xl font-semibold lg:text-6xl'
          >
            Crafting Quality <span className='text-red-400'>Glass</span> & <span className='text-amber-600'>Pyrex</span> for Every Need
          </motion.h1>
          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
            className='font-medium'
          >
            Emphasizes the focus on high-quality, specialized glass and Pyrex products.
          </motion.p>
          {/* Button Section */}
          <motion.div
            variants={SlideRight(1)}
            initial="hidden"
            animate="visible"
            className='flex gap-8 justify-center md:justify-start !mt-8 items-center'
          >
            <button className='primary-btn herofont' aria-label="About Us">About Us</button>
            <button className='primary-btn herofont' aria-label="Contact Us">Contact Us</button>
          </motion.div>
        </div>
      </div>
      {/* Hero Image */}
      <div className='flex justify-center items-center'>
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          src={he}
          alt="High-quality glass and Pyrex products"
          className='rounded-xl w-[350px] md:w-[550px] xl:w-[700px]'
        />
      </div>
    </div>
  );
}

export default Hero;