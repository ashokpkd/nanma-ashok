import React from "react";

const ProfileOptions = ({ name }) => {
  return (
    <div className=" w-full   h-10 bg-zinc-100 flex justify-start items-center pl-5 rounded-md text-sm font-medium">
      {name}
    </div>
  );
};

export default ProfileOptions;
