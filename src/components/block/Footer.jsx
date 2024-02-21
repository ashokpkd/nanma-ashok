import React from "react";
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import qr from "../../assets/images/Qrcode.png";
import playstore from "../../assets/images/app-store.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-black w-[100%] flex flex-col text-sm text-white px-5 py-5 gap-5 md:flex-row  ">
        <div className="flex flex-col gap-1 md:w-[20%] ">
          <p className="text-lg font-bold">Exclusive</p>
          <p className="text-md font-semibold">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="search-box relative ">
            <input
              type="text"
              placeholder="Enter your Email"
              className=" w-[95%] h-10 px-5 outline-none rounded-md bg-black border"
            />
            <VscSend
              className="absolute right-10 top-1/2 -translate-y-1/2 "
              size={20}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]">
          <p className="text-lg font-bold">Support</p>
          <p className="text-sm">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]">
          <p className="text-lg font-bold">Account</p>
          <p className="text-sm">My Account</p>
          <p className="text-sm">Login / Register</p>
          <p className="text-sm">Cart</p>
          <p className="text-sm">Wishlist</p>
          <p className="text-sm">Shop</p>
        </div>
        <div className="flex flex-col gap-1 md:w-[20%]">
          <p className="text-lg font-bold">Quick Link</p>
          <p className="text-sm">Privacy policy</p>
          <p className="text-sm">Terms of Use</p>
          <p className="text-sm">FAQ</p>
          <p className="text-sm">Contact</p>
        </div>
        <div className="flex flex-col gap-2 md:w-[20%]">
          <p className="text-lg font-bold">Download App</p>
          <p className="text-xs">Save $3 with App New User Only</p>
          <div className="flex gap-2">
            <div>
              <img src={qr} alt="qrcode" />
            </div>
            <div>
              <img src={playstore} alt="appstore" />
            </div>
          </div>
          <div className="flex justify-start gap-8 w-full items-center">
            <div>
              <RiFacebookLine size={25} />
            </div>
            <div>
              <FiTwitter size={25} />
            </div>
            <div>
              <FaInstagram size={25} />
            </div>
            <div>
              <RiLinkedinLine size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
