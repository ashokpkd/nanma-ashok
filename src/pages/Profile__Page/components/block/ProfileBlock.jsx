import React from "react";
import profileImg from "../../../../assets/images/profile-img.png";

const ProfileBlock = () => {
  return (
    <div className=" bg-zinc-100 sm:max-h-36 w-[50%] rounded-md">
      <div className="text-sm text-current font-medium flex justify-end px-3 py-3">
        Edit
      </div>
      <div className="flex flex-col sm:flex-row  justify-start items-center px-5 gap-3   ">
        <div className="flex justify-center items-center">
          <img
            src={profileImg}
            alt="profileImg"
            className=" object-contain sm:w-20"
          />
        </div>
        <div className=" flex flex-col justify-center items-start py-2">
          <p className="text-sm font-bold">Gilbert Jones</p>
          <p className="text-xs text-gray-400">Glbertjones001@gmail.com</p>
          <p className="text-xs text-gray-400">121-224-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
