import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero/Hero';
const App = () => {
  return (
  <>
      <Navbar />
      <div className='pt-32 mx-auto max-w-7xl '>
        <Hero />
        <Footer />
    </div>
  </>
  
  
  
  );
};

export default App