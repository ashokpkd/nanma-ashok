import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const LoginForm = () => {
  const [value, setValue] = useState({
    mobileNumber:'',
    password:''
  });
  const [click,setClick]=useState(false)
  const handleOnChange = (event) => {
    const {name,value}= event.target
    setValue((prev)=>({...prev,[name]:value}));
  };
  const handleEyeIcon = ()=>{
setClick((prev)=>!prev)
    setTimeout(() => {
      setClick(false)
    }, 500);
  }
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div>
        <label htmlFor="mobileNumber" className="font-semibold text-sm">
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
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
        </div>
        <div className="relative w-full">
          <Input
            placeholder={"*********"}
            type={click ?"text" :"password"}
            value={value.password}
            name={"password"}
            onChange={handleOnChange}
            id={"password"}
          />
          <div className=" absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer text-zinc-400" onClick={handleEyeIcon}>
          { click ? <RiEyeLine className="eye-icon"/> :<RiEyeCloseLine className="eye-icon"/> }

          </div>
        </div>
        <p className=" text-right pt-1 text-xs text-zinc-400">Forgot Password ?</p>

        </div>
   
 
      </div>
    </>
  );
};

export default LoginForm;
