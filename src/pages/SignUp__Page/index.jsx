import React from "react";
import "./styles/SignUpPage.css";
import SignUpForm from "./components/block/SignUpForm";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SignUpText from "./components/block/SignUpText";

const SignUpPage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="sign-up-page">
        <div className="sign-up-block">
          <SignUpText/>
            <IoIosCloseCircleOutline className="absolute right-3 top-3 text-zinc-400 cursor-pointer" size={"1.75rem"} />
          <SignUpForm />
          <p className=" text-center text-sm">Already a User ? <span className="font-semibold cursor-pointer text-current" onClick={()=>navigate('/')}>Sign In</span></p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
