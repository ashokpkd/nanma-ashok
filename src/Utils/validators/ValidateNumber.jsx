export const ValidateNumber = (mobileNumber) => {
  if (!mobileNumber) {
    return "Mobile Number is required";
  }
  const mobileNumberRegex = /^\d{10}$/;
  if (!mobileNumberRegex.test(mobileNumber)) {
    return "Invalid Mobile Number";
  }
  return null;
};
