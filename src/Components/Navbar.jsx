import React from "react";

const Navbar = () => {
  return (
    <header className="mx-auto max-w-7xl fixed inset-x-0">
      <div className="flex items-center justify-between p-5 shadow-lg border">
        <div>
          <nav>
            <ul className="flex gap-x-5">
              {DATA.map((nav) => (
                <li key={nav.route}> {/* Use a unique key for each list item */}
                  <a href={nav.route}>{nav.name}</a> {/* Place the <a> tag inside <li> */}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="logo text-3xl font-bold text-[#0e7490]">ElFajr</div>
        <div>
          <button className="py-1.5 px-5 bg-gradient-to-r from-teal-200 to-teal-500 text-white rounded-lg shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

const DATA = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Shop",
    route: "/shop",
  },
];

export default Navbar;
