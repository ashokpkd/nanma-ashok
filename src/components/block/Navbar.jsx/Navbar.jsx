import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Hamburger from "../Hamburger";
const Navbar = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };
  return (
    <>
      <div className="navbar flex justify-between items-center w-[80%] py-5">
        <div className="nav-left">
          <div className="nav-logo min-w-40 ">
            <img src={logo} alt="logo" className=" max-md:hidden" />
            <RiMenu2Fill
              size={24}
              className=" md:hidden"
              onClick={toggleHamburger}
            />
          </div>
        </div>
        <div className="nav-center flex items-center gap-10 justify-center max:sm:hidden max-md:hidden ">
          <nav>
            <ul className="flex justify-evenly gap-10 text-md font-medium ">
              <li className="hover:text-current cursor-pointer">
                <p onClick={() => navigate("/home")}>Home</p>
              </li>
              <li className="hover:text-current cursor-pointer">
                <p onClick={() => navigate("/contact")}>Contact</p>
              </li>
              <li className="hover:text-current cursor-pointer">
                <p onClick={() => navigate("/about")}>About</p>
              </li>
              <li className="hover:text-current cursor-pointer">
                <p onClick={() => navigate("/")}>SignIn</p>
              </li>
            </ul>
          </nav>
          <div className="search-bar flex">
            <div className="search-box relative ">
              <input
                type="text"
                placeholder="what are you looking for?"
                className=" w-72 h-12 bg-slate-100 px-5 outline-none rounded-md"
              />
              <FiSearch
                className="absolute right-5 top-1/2 -translate-y-1/2"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="nav-right flex gap-3 cursor-pointer">
          <IoHeartOutline size={24} className="md:hidden" />
          <FiUser size={24} className=" max-md:hidden" />
          <GrCart size={24} />
        </div>
      </div>
      <div className="nav2 w-[100%] md:hidden pb-5">
        <div className="search-bar px-3">
          <div className="search-box relative  ">
            <input
              type="text"
              placeholder="what are you looking for?"
              className=" h-12 bg-slate-100 w-full rounded-md px-5"
            />
            <FiSearch
              className="absolute right-5 top-1/2 -translate-y-1/2"
              size={20}
            />
          </div>
          {hamburgerOpen ? <Hamburger /> : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
