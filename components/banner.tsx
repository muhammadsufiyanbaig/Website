"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TiShoppingCart } from "react-icons/ti";
const Banner = () => {
  return (
    <motion.section 
      className="px-4"
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and moved down
      animate={{ opacity: 1, y: 0 }} // Final state: visible and in the correct position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="bg-gradient-to-br dark:from-gray-900 from-gray-200 dark:via-gray-900 via-gray-200 dark:to-[#790e0e] to-[#fa7b7b] p-4 sm:p-6 lg:p-10 rounded-2xl max-w-[90vh] sm:max-w-[80vh] dark:text-white text-gray-900 flex flex-col sm:flex-row items-center justify-between mx-auto my-10 gap-4 sm:gap-0">
        <div className="flex flex-col gap-6">
          <div>
            <motion.span 
              className="dark:text-gray-200 text-gray-900 text-sm sm:text-base"
              initial={{ opacity: 0, y: -20 }} // Hidden and slightly above
              animate={{ opacity: 1, y: 0 }} // Fade in and drop down
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              "Upgrade with TG Appliances – 25+ Years of Trust!"
            </motion.span>
            <br />
            <motion.span
              className="dark:text-gray-200 text-red-900 text-xl sm:text-3xl dark:font-semibold font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover cutting-edge home appliances 
            </motion.span>
          </div>
          <motion.a
            href="https://wa.link/6hgr7v"
            target="_blank"
            rel="noreferrer"
            className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group"
            whileHover={{ scale: 1.05 }} // Slightly scale the button on hover
            whileTap={{ scale: 0.95 }} // Shrink the button slightly on tap/click
          >
            <span>Shop now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="group-hover:translate-x-1 transition-transform ease duration-200"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
              />
            </svg>
          </motion.a>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Initial scale and opacity
          animate={{ scale: 1, opacity: 1 }} // Animate to full size and visible
          transition={{ delay: 0.5, duration: 0.8 }}
        >
         <TiShoppingCart className='text-7xl ml-5 font-bold' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
