import React from "react";
import Navbar from "../../components/block/Navbar.jsx/Navbar";
import Footer from "../../components/block/Footer";
import ProfileBlock from "./components/block/ProfileBlock";
import OptionsBlock from "./components/block/OptionsBlock";

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <hr className=" w-full" />
      <div className="w-[80vw] flex flex-col py-5 gap-2 mb-40">
        <p className=" flex justify-center font-bold items-center">Profile</p>
        <p className="flex justify-end items-center text-sm text-red-600 py-3 font-bold">
          Sign Out
        </p>
        <div className="flex flex-col justify-center w-full sm:flex-row-reverse gap-16">
          <ProfileBlock />
          <OptionsBlock />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
