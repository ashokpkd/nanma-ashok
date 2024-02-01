import { useState } from "react";
import React from "react";
import Input from "../../../../components/UI/Input";
const SignUpForm = () => {
  const [value, setValue] = useState({
    Name:'',
Email:'',
MobileNumber:'',
Password:'',
ConfirmPassword:''

  });
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div>
        <label htmlFor="" className="font-normal text-sm">Name</label>
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
        <label htmlFor="" className="font-normal text-sm">Email</label>
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
        <label htmlFor="" className="font-normal text-sm">Mobile Number</label>
        <Input
          placeholder={"Mobile Number"}
          type={"number"}
          value={value.MobileNumber}
          name={"MobileNumber"}
          onChange={handleOnChange}
          id={"mobileNumber"}
        />
        </div>
        <div>
        <label htmlFor="" className="font-normal text-sm">Password</label>
        <Input 
           placeholder={"Password"}
           type={"password"}
           value={value.Password}
           name={"Password"}
           onChange={handleOnChange}
           id={"password"}/>
        </div>
        <div>
        <label htmlFor="" className="font-normal text-sm">Confirm Password</label>
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
