import React from 'react'
import '../styles/style.css'

const Input = ({type,value,placeholder,onChange,name,id}) => {
  return (
    <div >
        <input 
        className='custom-input w-full'
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
          />
    </div>
  )
}

export default Input