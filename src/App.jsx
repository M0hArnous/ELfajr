import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './components/Hero';
import Footer from './Components/footer';

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