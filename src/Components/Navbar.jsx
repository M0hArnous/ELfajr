import React from 'react';
import logo from "../assets/logo1.jpg";
const Navbar = () => {
  return (
  <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
            <div className="flex items-center flex-shrink">
                <span className='text-2xl font-special '>الفجر</span>       
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>

            </ul>
        </div>
    </div>
  </nav>
)
}

export default Navbar