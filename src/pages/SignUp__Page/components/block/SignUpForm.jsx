import { useState } from "react";
import React from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine, RiEyeLine} from "react-icons/ri";

const SignUpForm = () => {
  const [value, setValue] = useState({
    Name:'',
Email:'',
MobileNumber:'',
Password:'',
ConfirmPassword:''
 });
 const[click,setClick] =useState(true)
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
const handleIconClick = ()=>{
  setClick((prev)=>!prev)
}

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div>
        <label htmlFor="" className="font-semibold text-sm">Name</label>
        <Input
          placeholder={"Name"}
          type={"text"}
          value={value.Name}
          name={"Name"}
          onChange={handleOnChange}
          id={"name"}
        />
        </div>
        <div>
        <label htmlFor="" className="font-semibold text-sm">Email</label>
        <Input
          placeholder={"Email"}
          type={"email"}
          value={value.Email}
          name={"Email"}
          onChange={handleOnChange}
          id={"email"}
        />
        </div>
        <div>
        <label htmlFor="" className="font-semibold text-sm">Mobile Number</label>
        <Input
          placeholder={"Mobile Number"}
          type={"number"}
          value={value.MobileNumber}
          name={"MobileNumber"}
          onChange={handleOnChange}
          id={"mobileNumber"}
        />
        </div>
        <div className="relative">
        <label htmlFor="" className="font-semibold text-sm">Password</label>
        <Input 
           placeholder={"Password"}
           type={click?"password" :"text"}
           value={value.Password}
           name={"Password"}
           onChange={handleOnChange}
           id={"password"}/>
           {click ? <RiEyeCloseLine className=" absolute top-9 right-5 text-zinc-400" onClick={handleIconClick}/> : <RiEyeLine className=" absolute top-9 right-5 text-zinc-400" onClick={handleIconClick}/>}
        </div>
        <div>
        <label htmlFor="" className="font-semibold text-sm">Confirm Password</label>
        <Input 
           placeholder={"Confirm Password"}
           type={"password"}
           value={value.ConfirmPassword}
           name={"ConfirmPassword"}
           onChange={handleOnChange}
           id={"mobileNumber"}/>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
