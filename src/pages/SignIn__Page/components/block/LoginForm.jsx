import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../../../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { ValidateNumber } from "../../../../Utils/validators/ValidateNumber";
import { ValidatePassword } from "../../../../Utils/validators/ValidatePassword";

const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    mobileNumber: "",
    password: "",
  });
  const [click, setClick] = useState(false);
  const [errors, setErrors] = useState({});

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
  const handleLoginForm = (event) => {
    event.preventDefault();
    const newErrors = {};
    const mobileNumberError = ValidateNumber(value.mobileNumber)
    if (mobileNumberError) {
      newErrors.mobileNumber = mobileNumberError
    }
    const passwordError = ValidatePassword(value.password)
    if (passwordError) {
      newErrors.password = passwordError
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      navigate("/home");
    }
  };
  return (
    <>
      <form onSubmit={handleLoginForm} className="w-full flex flex-col gap-5">
        <div className="flex flex-col">
        <label htmlFor="mobileNumber" className="font-semibold text-sm">
              Email ID/Mobile Number
            </label>
          <div>
            <Input
              placeholder={"Mobile Number"}
              type={"number"}
              value={value.mobileNumber}
              name={"mobileNumber"}
              onChange={handleOnChange}
              id={"mobileNumber"}
            />
          </div>
          <div className="flex justify-end">
            {errors.mobileNumber && (
              <span className="text-xs top-0 text-red-600  w-min-5 ">
                {errors.mobileNumber}
              </span>
            )}
          </div>
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
          <div className="flex justify-end ">
            {errors.password && (
              <span className="text-xs top-0 text-red-600  ">
                {errors.password}
              </span>
            )}
          </div>
          <p className=" text-right pt-3 text-xs text-zinc-400">
            Forgot Password ?
          </p>
        </div>
        <Button name={"Login"} />
      </form>
    </>
  );
};

export default LoginForm;
