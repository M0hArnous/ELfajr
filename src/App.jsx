import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div className="py-16">
        <Hero />
      </div>

      {/* About Section */}
      <div className="py-16">
        <About />
      </div>

      {/* Products Section */}
      <div className="py-16">
        <Products />
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
