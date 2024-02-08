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

    const mobileNumberError = ValidateNumber(value.mobileNumber);
    if (mobileNumberError) {
      newErrors.mobileNumber = mobileNumberError;
    }
    if (!value.password) {
      newErrors.password = 'Password is required';
     
    }
    setErrors(newErrors);
    if (newErrors in errors) {
  return
    }
    else {
      if (Object.keys(newErrors).length === 0) { 
          await postData({body: {emailormobile:value.mobileNumber, password: value.password}});
      }
    }

  };
  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="spinner-border text-primary" role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
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
