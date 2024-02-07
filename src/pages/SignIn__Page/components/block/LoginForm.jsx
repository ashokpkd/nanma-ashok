import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { ValidateNumber } from "../../../../Utils/validators/ValidateNumber";
import { ValidatePassword } from "../../../../Utils/validators/ValidatePassword";
import useCustomPostApi from "../../../../hooks/api/useCustomPostApi";
import "../../styles/SignInPage.css";
import { routes } from "../../../../constants/routes";

const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    mobileNumber: "",
    password: "",
  });
  const [click, setClick] = useState(false);
  const [errors, setErrors] = useState({});
  const {

    loading,
    errors: apiErrors,
    postData,
  } = useCustomPostApi({ url: "https://portal.umall.in/api/customer/login",successCB:onLoginSuccess});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleEyeIcon = () => {
    setClick((prev) => !prev);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };
  const handleLoginForm = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // const mobileNumberError = ValidateNumber(value.mobileNumber);
    // if (mobileNumberError) {
    //   newErrors.mobileNumber = mobileNumberError;
    // }
    // const passwordError = ValidatePassword(value.password);
    // if (passwordError) {
    //   newErrors.password = passwordError;
     
    // }
  //   setErrors(newErrors);
  //   if (newErrors in errors) {
  // return
  //   }
  //   else {
  //     if (Object.keys(newErrors).length === 0) { 
          await postData({body: {emailormobile:value.mobileNumber, password: value.password}});
    //   }
    // }

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
      <form onSubmit={handleLoginForm} className="w-full flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="mobileNumber" className="font-semibold text-sm">
            Email ID/Mobile Number
          </label>
          <div>
            <Input
              placeholder={"Mobile Number"}
              type={"text"}
              value={value.mobileNumber}
              name={"mobileNumber"}
              onChange={handleOnChange}
              id={"mobileNumber"}
            />
          </div>
          {errors.mobileNumber && (
            <span className="text-xs top-0 text-red-600  w-min-5 ">
              {errors.mobileNumber}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password" className="font-semibold text-sm ">
            Password
          </label>
          <div className="relative w-full">
            <Input
              placeholder={"Password"}
              type={click ? "text" : "password"}
              value={value.password}
              name={"password"}
              onChange={handleOnChange}
              id={"password"}
            />
            <div
              className=" absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer text-zinc-400"
              onClick={handleEyeIcon}
            >
              {click ? (
                <RiEyeLine className="eye-icon" />
              ) : (
                <RiEyeCloseLine className="eye-icon" />
              )}
            </div>
          </div>
          {errors.password && (
            <span className="text-xs top-0 text-red-600  ">
              {errors.password}
            </span>
          )}
          <p
            onClick={() => navigate("/resetpassword")}
            className=" text-right pt-3 text-xs text-zinc-400 cursor-pointer hover:text-current"
          >
            Forgot Password ?
          </p>
        </div>
        <Button name={"Login"} disabled={loading} />
      </form>
    </>
  );
  function onLoginSuccess({ data = { } }) {
    console.log(data?.user?.id,'from login form')
    navigate(routes.home())
  }
};

export default LoginForm;
