import React from "react";
const Navbar = () => {
  return (
    // <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    //   <div className="container px-4 mx-auto relative text-sm">
    //       <div className="flex justify-center items-center">
    //           <div className="flex items-center flex-shrink">
    //               <span className='text-2xl font-special '>الفجر</span>
    //           </div>
    //           <ul className='hidden lg:flex ml-14 space-x-12'>

    //           </ul>
    //       </div>
    //   </div>
    // </nav>

    <header className="mx-auto max-w-7xl  fixed inset-x-0">
      <div className="flex items-center justify-between p-5 shadow-lg border">
        <div>
          <nav>
            <ul className="flex gap-x-5">
              {DATA.map((nav) => (
                 <a href={nav.route}>
                 <li>
                   {nav.name}
                 </li>
               </a>
              ))}
            </ul>
          </nav>
        </div>
        <div className="logo text-3xl font-bold text-blue-600">الفجر</div>
        <div>
          <button className="py-1.5 px-5 bg-gradient-to-r from-teal-200 to-teal-500 text-white rounded-lg shadow-lg">Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



const DATA = [
  {
      name: "Home",
      route: "/"
  },
  {
      name: "About",
      route: "/about"
  },
  {
      name: "Shop",
      route: "/shop"
  },
]
