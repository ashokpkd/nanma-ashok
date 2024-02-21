import React from "react";
import Navbar from "../../components/block/Navbar.jsx/Navbar";
import Footer from "../../components/block/Footer";
import AboutBlock from "./components/block/AboutBlock";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <hr className=" w-full text-slate-400 " />
      <div className="w-[80vw] mt-10 mb-60">
        <AboutBlock />
      </div>
      <Footer />
    </div>
  );
};

export default About;
