import React from "react";
import contactImg from "../../../../assets/images/contactpageimg.png";
import Input from "../../../../components/UI/Input";
import Button from "../../../../components/UI/Button";

const ContactBlock = () => {
  return (
    <div className="flex max-sm:flex-col sm:flex-col md:flex-row items-center xl:items-center gap-5 md;gap-5">
      <div className="">
        <img src={contactImg} alt="contact-img" />
      </div>
      <div className="py-3 md:py-8 md:px-10">
        <div>
          <p className="text-xl md:text-3xl font-bold">Contact us</p>
        </div>
        <div className=" flex gap-2  py-2">
          <div className="w-[50%]">
            <p className=" font-semibold md:text-lg lg:text-lg xl:text-lg text-current">
              Visit Us
            </p>
            <p className="text-xs md:text-sm ">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          <div className="w-[50%]">
            <p className=" font-semibold  md:text-lg lg:text-lg xl:text-lg text-current">
              Contact
            </p>
            <p className="text-xs md:text-sm">
              contact@company.com
              <br />
              (406) 555-0120
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-2 py-2 max-md:flex-col sm:flex-row">
          <Input name={"Email"} placeholder={"Email"} type={"email"} />
          <Button
            name={"Subscribe"}
            className={
              "md:w-[30%] sm:w-[30%] h-10 text-sm md:text-xs lg:text-xs"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
