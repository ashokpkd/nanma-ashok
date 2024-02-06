import React, { useState } from 'react'
import Input from '../../../../components/UI/Input'
import Button from '../../../../components/UI/Button'
import { ValidateNumber } from '../../../../Utils/validators/ValidateNumber'
import { ValidatePassword } from '../../../../Utils/validators/ValidatePassword'
import {RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'

const ResetForm = () => {
    const [value, setValue] = useState({
        mobile: '',
        enterOtp: '',
        resetPassword: '',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({});
    const [click,setClick]=useState(true)
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setValue((prev)=>({...prev,[name]:value}))
    }
    const handleIconClick = () => {
        setClick((prev) => !prev);
      };
    const handleOnsubmit = (event) => {
        event.preventDefault()
        const newErrors = {};
        const mobileNumberError = ValidateNumber(value.mobileNumber)
        if (mobileNumberError) {
          newErrors.mobileNumber = mobileNumberError
        }
        const passwordError = ValidatePassword(value.password)
        if (passwordError) {
          newErrors.password = passwordError
        }
        if (!value.enterOtp) {
            newErrors.enterOtp="OTP is required"
        }
        if (!value.confirmPassword) {
            newErrors.confirmPassword='Confirm Password is required'
        }
        if (value.password != value.confirmPassword) {
            newErrors.notSamePwd = "Entered password is not same as above"
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          alert('successfully reseted password')
        }
    }
  return (
      <>
          <form action="" className='w-full flex flex-col gap-5' onSubmit={handleOnsubmit}>
              <div>
                  <Input name={'mobile'} value={value.mobile} placeholder={'Mobile'} type={'text'} onChange={handleOnChange} id={'Mobile'} />
                  {errors.mobileNumber && <span className="text-xs text-red-600 ">{errors.mobileNumber}</span> }
              </div>
              <div className='w-1/4  ml-auto '>
              <Button name={'Get OTP'} className={"rounded-xl h-10 text-xs  font-semibold"}/> 
              </div>
              <div>
                  <Input name={'enterOtp'} value={value.enterOtp} placeholder={'Enter OTP'} type={'text'} onChange={handleOnChange} id={'enterOTP'} />
                  {errors.enterOtp && <span className="text-xs text-red-600 ">{errors.enterOtp}</span> }
              </div>
              <div className='relative'>
                  <Input name={'resetPassword'} value={value.resetPassword} type={click ? "password" : "text"} onChange={handleOnChange} placeholder={'Reset password'} id={'resetPassword'} />
             {click ? <RiEyeCloseLine
              className=" absolute top-1/2 -translate-y-1/2 right-5 text-zinc-400 cursor-pointer"
              onClick={handleIconClick}
                  /> : <RiEyeLine
                  className=" absolute top-1/2 -translate-y-1/2 right-5 text-zinc-400 cursor-pointer"
                  onClick={handleIconClick}
                />
            }
                  {errors.password && <span className="text-xs text-red-600 ">{errors.password}</span> }
              </div>
              <div>
                  <Input name={'confirmPassword'} value={value.confirmPassword} type={'password'} onChange={handleOnChange} placeholder={'Confirm Password'} id={'confirmPassword'} />
                  {!value.confirmPassword ? (<span className='text-xs text-red-600'>{errors.confirmPassword}</span>)
                      : (<span className='text-xs text-red-600'>{errors.notSamePwd}</span>)}
                        
              </div>
              <div>
                  <Button name={'Reset Password'} className={'font-semibold '}/>
              </div>
      </form>
      </>
  )
}

export default ResetForm