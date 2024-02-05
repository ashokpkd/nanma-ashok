import React from 'react'

const Button = ({name,onClick}) => {
  return (
    <>
      <button className='custom-btn' onClick={onClick} >{name}</button>
    </>
  )
}

export default Button
