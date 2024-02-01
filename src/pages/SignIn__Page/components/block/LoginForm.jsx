import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine } from "react-icons/ri";

const LoginForm = () => {
  const [value, setValue] = useState({
    mobileNumber:'',
    password:''
  });
  const [click,setClick]=useState(true)
  const handleOnChange = (event) => {
    const {name,value}= event.target
    setValue((prev)=>({...prev,[name]:value}));
  };
  const handleEyeIcon = ()=>{
setClick((prev)=>!prev)
  }
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div>
        <label htmlFor="mobileNumber" className="font-normal text-sm">
          Email ID/Mobile Number
        </label>
        <Input
          placeholder={"Mobile Number"}
          type={"text"}
          value={value.mobileNo}
          name={"mobileNumber"}
          onChange={handleOnChange}
          id={"mobileNumber"}
        />
        </div>
        <div>
        <div >
          <label htmlFor="password" className="font-normal text-sm">
            Password
          </label>
        </div>
        <div className="relative w-full">
          <Input
            placeholder={"Password"}
            type={click ? "password" :"text"}
            value={value.password}
            name={"password"}
            onChange={handleOnChange}
            id={"password"}
          />
          <RiEyeCloseLine className="eye-icon absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"  onClick={handleEyeIcon}/>
        </div>
        <p className=" text-right pt-1 text-xs text-zinc-400">Forgot Password ?</p>

        </div>
   
 
      </div>
    </>
  );
};

export default LoginForm;
