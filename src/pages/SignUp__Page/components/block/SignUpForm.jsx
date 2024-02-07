import { useState } from "react";
import React from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { ValidateEmail } from "../../../../Utils/validators/ValidateEmail";
import { ValidateNumber } from "../../../../Utils/validators/ValidateNumber";
import { ValidatePassword } from "../../../../Utils/validators/ValidatePassword";
import useCustomPostApi from "../../../../hooks/api/useCustomPostApi";
import { routes } from "../../../../constants/routes";

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    loading,
    errors: apiErrors,
    postData,
  } = useCustomPostApi({
    url: "https://portal.umall.in/api/customer/register",
    successCB: onSignUpSuccess
  });
  const [value, setValue] = useState({
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [click, setClick] = useState(true);
  const [errors, setErrors] = useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleIconClick = () => {
    setClick((prev) => !prev);
  };
  const handleSignUpForm = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!value.Name) {
      newErrors.Name = "Name is required";
    }
    const emailError = ValidateEmail(value.Email);
    if (emailError) {
      newErrors.Email = emailError;
    }
    const mobileNumberError = ValidateNumber(value.MobileNumber);
    if (mobileNumberError) {
      newErrors.MobileNumber = mobileNumberError;
    }
    const passwordError = ValidatePassword(value.Password);
    if (passwordError) {
      newErrors.Password = passwordError;
    }
    if (!value.ConfirmPassword) {
      newErrors.ConfirmPassword = "Confirm password is required";
    }
    if (value.Password !== value.ConfirmPassword) {
      newErrors.notSamePwd = " Entered password is not same as above";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
    await postData({
        body: {
          name:value.Name,email:value.Email,password:value.Password,phone:value.MobileNumber
        },
      });
  
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="spinner-border text-primary" role="status">
            <span>Loading...</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSignUpForm} className="w-full flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="font-semibold text-sm">
            Name
          </label>
          <Input
            placeholder={"Name"}
            type={"text"}
            value={value.Name}
            name={"Name"}
            onChange={handleOnChange}
            id={"name"}
          />
          {errors.Name && (
            <span className=" text-red-600 text-xs">{errors.Name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <Input
            placeholder={"Email"}
            type={"email"}
            value={value.Email}
            name={"Email"}
            onChange={handleOnChange}
            id={"email"}
          />
          {errors.Email && (
            <span className=" text-red-600 text-xs">{errors.Email}</span>
          )}
        </div>
        <div>
          <label htmlFor="mobileNumber" className="font-semibold text-sm">
            Mobile Number
          </label>
          <Input
            placeholder={"Mobile Number"}
            type={"text"}
            value={value.MobileNumber}
            name={"MobileNumber"}
            onChange={handleOnChange}
            id={"mobileNumber"}
          />
          {errors.MobileNumber && (
            <span className=" text-red-600 text-xs">{errors.MobileNumber}</span>
          )}
        </div>
        <div className="relative">
          <label htmlFor="password" className="font-semibold text-sm">
            Password
          </label>
          <Input
            placeholder={"Password"}
            type={click ? "password" : "text"}
            value={value.Password}
            name={"Password"}
            onChange={handleOnChange}
            id={"password"}
          />
          {click ? (
            <RiEyeCloseLine
              className=" absolute top-9 right-5 text-zinc-400"
              onClick={handleIconClick}
            />
          ) : (
            <RiEyeLine
              className=" absolute top-9 right-5 text-zinc-400"
              onClick={handleIconClick}
            />
          )}
          {errors.Password && (
            <span className=" text-red-600 text-xs">{errors.Password}</span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="font-semibold text-sm">
            Confirm Password
          </label>
          <Input
            placeholder={"Confirm Password"}
            type={"password"}
            value={value.ConfirmPassword}
            name={"ConfirmPassword"}
            onChange={handleOnChange}
            id={"confirmPassword"}
          />
          {errors.ConfirmPassword ? (
            <span className=" text-red-600 text-xs">
              {errors.ConfirmPassword}
            </span>
          ) : (
            <span className=" text-red-600 text-xs">{errors.notSamePwd}</span>
          )}
        </div>
        <div className=" mt-5">
          <Button name={"Sign Up"} />
        </div>
      </form>
    </>
  );

  function onSignUpSuccess({ data = {} }) {
    const userId = data?.user?.id;
    if (userId) {
        console.log(userId, 'from signup form');
        navigate(routes.logIn());
    } else {
        console.error('User ID not found in response data');
    }  
  }

};

export default SignUpForm;
