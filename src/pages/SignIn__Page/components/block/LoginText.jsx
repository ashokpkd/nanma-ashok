import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import '../../styles/SignInPage.css'

const LoginText = () => {
  return (
    <>
            <div className=" w-full relative flex flex-col items-center">
            <div className=" absolute -top-4 -translate-y-1/2  text-zinc-400   -right-7"><IoIosCloseCircleOutline size={"2rem"} /></div>
                <p className='header-title'>Welcome back !</p>
                <p className="header-text">
                    Where Every Bite Tells a Story, and Every
                    Moment Feels Like Home!</p>

            </div>
    </>
  )
}

export default LoginText