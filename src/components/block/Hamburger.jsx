import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const Hamburger = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="flex flex-col justify-center items-center bg-zinc-100 gap-2 text-md font-medium mt-2 py-2 rounded-lg">
        <li className="hover:text-current cursor-pointer">
          <p onClick={() => navigate(routes.home())}>Home</p>
        </li>
        <li className="hover:text-current cursor-pointer">
          <p onClick={() => navigate(routes.contact())}>Contact</p>
        </li>
        <li className="hover:text-current cursor-pointer">
          <p onClick={() => navigate(routes.about())}>About</p>
        </li>
        <li className="hover:text-current cursor-pointer">
          <p onClick={() => navigate(routes.logIn())}>Sign In</p>
        </li>
        <li className="hover:text-current cursor-pointer">
          <p onClick={() => navigate(routes.profile())}>Profile</p>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
