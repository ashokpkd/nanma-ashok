import React from 'react'

const Button = ({name,onClick,className}) => {
  return (
    <>
      <button className={`custom-btn ${className}`} onClick={onClick} >{name}</button>
    </>
  )
}

export default Button
