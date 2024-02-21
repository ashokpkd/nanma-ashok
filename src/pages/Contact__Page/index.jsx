import React from "react";
import Navbar from "../../components/block/Navbar.jsx/Navbar";
import Footer from "../../components/block/Footer";
import ContactBlock from "./components/block/ContactBlock";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <hr className=" w-full text-slate-400 " />
      <div className="w-[80vw] mb-40 mt-10">
        <ContactBlock />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
