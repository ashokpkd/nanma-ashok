import React from "react";
import useCustomGetApi from "../../hooks/api/useCustomGetApi";
import Navbar from "../../components/block/Navbar.jsx/Navbar";
import Footer from "../../components/block/Footer";
import Bullets from "../../components/UI/Bullets";
import HomeBanner from "./components/block/HomeBanner";
import CategorySection from "./components/block/CategorySection";
import PopularSection from "./components/block/PopularSection";

const HomePage = () => {
  const { data, errors, loading } = useCustomGetApi(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className=" flex flex-col items-center">
      <Navbar />
      <hr className=" w-full text-slate-400 " />
      <HomeBanner />
      <div className="w-[80vw] mt-5">
        <CategorySection/>
      </div>
      <PopularSection/>
      <Footer />
    </div>
  );
};

export default HomePage;
