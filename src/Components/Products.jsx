import React from 'react';
import { motion } from 'framer-motion';
import cup1 from '../Components/images/cup1.jpg'
import cup4 from '../Components/images/cup4.jpeg'
import cup3 from '../Components/images/cup3.webp'
const products = [
  {
    name: "example 1",
    description: "High-quality ",
    image: cup4
  },
  {
    name: "example 2",
    description: "high quality ",
    image: cup1
  },
  {
    name: "example 3",
    description: "high quality",
    image: cup3
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Our Products
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
