import React from "react";
import ProfileOptions from "../ui/ProfileOptions";

const OptionsBlock = () => {
  return (
    <div className="flex w-full sm:w-[50%] flex-col gap-2">
      <ProfileOptions name={"Profile"} />
      <ProfileOptions name={"Address"} />
      <ProfileOptions name={"Favourites"} />
      <ProfileOptions name={"Order History"} />
      <ProfileOptions name={"Help"} />
      <ProfileOptions name={"Support"} />
    </div>
  );
};

export default OptionsBlock;
