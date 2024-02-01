import React from "react";
import "./styles/SignInPage.css";
import LoginButton from "./components/block/LoginButton";
import LoginForm from "./components/block/LoginForm";
import './styles/SignInPage.css'
import LoginText from "./components/block/LoginText";

function SignInPage() {
  return (
    <div className="signInPage ">
      <div className="signInBlock">
      <LoginText/> 
      <LoginForm />
      <LoginButton />
      </div>
    </div>
  );
}

export default SignInPage;
