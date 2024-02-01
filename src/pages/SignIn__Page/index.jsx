import React from "react";
import "./styles/SignInPage.css";
import LoginButton from "./components/block/LoginButton";
import LoginForm from "./components/block/LoginForm";
import './styles/SignInPage.css'
import LoginText from "./components/block/LoginText";
import { IoIosCloseCircleOutline } from "react-icons/io";

function SignInPage() {
  return (
    <div className="signInPage">
      <div className="sign-in-block">
      <IoIosCloseCircleOutline className="absolute right-5 top-3 text-zinc-400 cursor-pointer" size={"2rem"} />
      <LoginText/> 
      <LoginForm />
      <LoginButton />
      </div>
    </div>
  );
}

export default SignInPage;
