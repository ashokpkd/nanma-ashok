import React from "react";
import "./styles/SignUpPage.css";
import SignUpForm from "./components/block/SignUpForm";
import SignUpButton from "./components/block/SignUpButton";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="sign-up-page">
        <div className="sign-up-block">
            <p className=" text-center font-bold mt-3">Sign Up</p>
            <IoIosCloseCircleOutline className="absolute right-3 top-3 text-zinc-400 cursor-pointer" size={"1.75rem"} />
          <SignUpForm />
          <SignUpButton onClick={()=>navigate('/')} />
          <p className=" text-center text-sm">already a User ? <span className="font-bold cursor-pointer text-current" onClick={()=>navigate('/')}>Sign In</span></p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
