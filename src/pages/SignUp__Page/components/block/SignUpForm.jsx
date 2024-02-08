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
import '../../styles/SignUpPage.css'

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
       <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span className="sr-only">Loading...</span>
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
