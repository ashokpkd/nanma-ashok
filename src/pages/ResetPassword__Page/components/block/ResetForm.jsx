import React, { useState } from "react";
import Input from "../../../../components/UI/Input";
import Button from "../../../../components/UI/Button";
import { ValidateNumber } from "../../../../Utils/validators/ValidateNumber";
import { ValidatePassword } from "../../../../Utils/validators/ValidatePassword";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import useCustomPostApi from "../../../../hooks/api/useCustomPostApi";

const ResetForm = () => {
  const {
    data,
    loading,
    errors: apiErrors,
    postData,
    currentOtp,
  } = useCustomPostApi({ url: "https://portal.umall.in/api/check-mobile" });
  const {
    data: resetData,
    loading: loadingMsg,
    errors: resetErrors,
    postData: resetPassword,
  } = useCustomPostApi({ url: "https://portal.umall.in/api/reset-password" });
  const [value, setValue] = useState({
    mobile: "",
    enterOtp: "",
    resetPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [click, setClick] = useState(true);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleIconClick = () => {
    setClick((prev) => !prev);
  };

  const handleOnsubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    const mobileNumberError = ValidateNumber(value.mobile);
    if (mobileNumberError) {
      newErrors.mobile = mobileNumberError;
    }
    const passwordError = ValidatePassword(value.resetPassword);
    if (passwordError) {
      newErrors.resetPassword = passwordError;
    }
    if (!value.enterOtp) {
      newErrors.enterOtp = "OTP is required";
    }

    if (!value.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (value.resetPassword !== value.confirmPassword) {
      newErrors.notSamePwd = "Entered password is not same as above";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0 && value.enterOtp == currentOtp) {
      await resetPassword({
        body: { number: value.mobile, password: value.confirmPassword },
      });
    }
  };
  const handleOnSendOtp = async (event) => {
    event.preventDefault();
    await postData({
      body: { number: value.mobile },
    });
  };
  return (
    <>
      <form action="" className="w-full flex flex-col gap-5">
        <div>
          <Input
            name={"mobile"}
            value={value.mobile}
            placeholder={"Mobile"}
            type={"text"}
            onChange={handleOnChange}
            id={"Mobile"}
          />
        </div>
        <div className=" -mt-5">
          {errors.mobile && (
            <span className="text-xs text-red-600 ">{errors.mobile}</span>
          )}
        </div>
        <div className="w-1/4  ml-auto ">
          <Button
            name={"Get OTP"}
            className={"rounded-xl h-10 text-xs  font-semibold"}
            onClick={handleOnSendOtp}
          />
        </div>
        <div>
          <Input
            name={"enterOtp"}
            value={value.enterOtp}
            placeholder={"Enter OTP"}
            type={"text"}
            onChange={handleOnChange}
            id={"enterOTP"}
          />
        </div>
        <div className=" -mt-5">
          {errors.enterOtp && (
            <span className=" text-red-600 text-xs">{errors.enterOtp} </span>
          )}
        </div>
        <div className="relative">
          <Input
            name={"resetPassword"}
            value={value.resetPassword}
            type={click ? "password" : "text"}
            onChange={handleOnChange}
            placeholder={"Reset password"}
            id={"resetPassword"}
          />
          {click ? (
            <RiEyeCloseLine
              className=" absolute top-1/2 -translate-y-1/2 right-5 text-zinc-400 cursor-pointer"
              onClick={handleIconClick}
            />
          ) : (
            <RiEyeLine
              className=" absolute top-1/2 -translate-y-1/2 right-5 text-zinc-400 cursor-pointer"
              onClick={handleIconClick}
            />
          )}
        </div>
        <div className=" -mt-5">
          {errors.resetPassword && (
            <span className="text-xs text-red-600 ">
              {errors.resetPassword}
            </span>
          )}
        </div>
        <div>
          <Input
            name={"confirmPassword"}
            value={value.confirmPassword}
            type={"password"}
            onChange={handleOnChange}
            placeholder={"Confirm Password"}
            id={"confirmPassword"}
          />
        </div>
        <div className=" -mt-5">
          {errors.confirmPassword ? (
            <span className="text-xs text-red-600">
              {errors.confirmPassword}
            </span>
          ) : (
            <span className="text-xs text-red-600">{errors.notSamePwd}</span>
          )}
        </div>
        <div>
          <Button
            name={"Reset Password"}
            className={"font-semibold "}
            onClick={handleOnsubmit}
          />
        </div>
      </form>
    </>
  );
};

export default ResetForm;
