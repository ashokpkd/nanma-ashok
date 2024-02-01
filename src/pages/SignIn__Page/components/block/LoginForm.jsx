import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine } from "react-icons/ri";

const LoginForm = () => {
  const [value,setValue] =useState("")
  const handleOnChange = (event)=>{
    setValue(event.target.value)
  }
  return (
    <>
      <form >
        <label htmlFor="mobileNumber" className="font-bold text-sm">Email ID/Mobile Number</label>
        <Input
          placeholder={"Mobile Number"}
          type={"text"}
          value={value}
          name={'mobileNumber'}
          onChange={handleOnChange}
          id={'mobileNumber'}
        />

      <label htmlFor="password"  className="font-bold text-sm">Password</label>
      <div className="relative">
        <Input
          placeholder={"Password"}
          type={"password"}
          value={value}
          name={'password'}
          onChange={handleOnChange}
          id={"password"}
        />
        <RiEyeCloseLine className="eye-icon absolute top-1/2 -translate-y-1/2 right-4" />
      </div>
      </form>
    </>
  );
};

export default LoginForm;
