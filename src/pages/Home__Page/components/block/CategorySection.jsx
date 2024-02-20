import React from "react";
import Bullets from "../../../../components/UI/Bullets";
import shoe from "../../../../assets/images/shoe.png";

const CategorySection = () => {
  return (
    <>
      {/* <div className="flex justify-between mt-5">
        <Bullets name={"Categories"} />
        <p className="text-sm font-semibold cursor-pointer">See all</p>
          </div>
          <div className="flex items-center w-[80vw] text-center gap-2 py-5">
        <div className=" w-[20%]" >
          <img src={shoe} alt="" className=" rounded-[50%] " />
          <p className="font-semibold">Shoe</p>
      </div>
      <div className=" w-[20%]" >
          <img src={shoe} alt="" className=" rounded-[50%] " />
          <p className="font-semibold">Shoe</p>
      </div>      
      <div className=" w-[20%]" >
          <img src={shoe} alt="" className=" rounded-[50%] " />
          <p className="font-semibold">Shoe</p>
      </div>      
      <div className=" w-[20%]" >
          <img src={shoe} alt="" className=" rounded-[50%] " />
          <p className="font-semibold">Shoe</p>
      </div>      
      <div className=" w-[20%]" >
          <img src={shoe} alt="" className=" rounded-[50%] " />
          <p className="font-semibold">Shoe</p>
        </div>    
          </div> */}
      <div className="flex justify-between mt-5">
        <Bullets name={"Categories"} />
        <p className="text-sm font-semibold cursor-pointer">See all</p>
      </div>
      <div className="flex items-center w-[80vw] text-center gap-3 py-5">
        <div className="w-[20%] flex flex-col gap-2">
          <img
            src={shoe}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
          <p className="font-semibold">Shoe</p>
        </div>
        <div className="w-[20%] flex flex-col gap-2">
          <img
            src={shoe}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
          <p className="font-semibold">Shoe</p>
        </div>
        <div className="w-[20%] flex flex-col gap-2">
          <img
            src={shoe}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
          <p className="font-semibold">Shoe</p>
        </div>
        <div className="w-[20%] flex flex-col gap-2">
          <img
            src={shoe}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
          <p className="font-semibold">Shoe</p>
        </div>
        <div className="w-[20%] flex flex-col gap-2">
          <img
            src={shoe}
            alt=""
            className="rounded-full aspect-square object-cover"
          />
          <p className="font-semibold">Shoe</p>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
