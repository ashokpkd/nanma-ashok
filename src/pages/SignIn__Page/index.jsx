import React from "react";
import "./styles/SignInPage.css";
import LoginForm from "./components/block/LoginForm";
import './styles/SignInPage.css'
import LoginText from "./components/block/LoginText";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate =useNavigate()

  return (
    <div className="signInPage">
      <div className="sign-in-block">
      <IoIosCloseCircleOutline className="absolute right-3 top-3 text-zinc-400 cursor-pointer" size={"1.75rem"} />
      <LoginText/> 
      <LoginForm />
      <p className=" text-sm text-center" >Not a user?<span className=" font-semibold cursor-pointer text-current" onClick={()=>navigate('/signup')} > Sign Up</span></p>
      </div>
    </div>
  );
}

export default SignInPage;
