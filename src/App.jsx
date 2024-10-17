import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 mx-auto max-w-7xl ">
        <Footer />
      </div>
    </>
  );
};

export default App;
