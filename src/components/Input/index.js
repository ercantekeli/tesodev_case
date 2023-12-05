import React, { useId } from 'react'
import "./input.css"

export const Input = ({label,placeholder,errorMessage, value,onChange}) => {
    const id = useId()
  return (
    <div className="container">
        <label htmlFor={id}>
            {label && <p className={errorMessage ? "labelErrorStyle" : "label"}>{label}</p>}
        </label>
        <input value={value} onChange={onChange} id={id}  className={errorMessage ? "inputErrorStyle" :'input'} placeholder={placeholder}/>
        {errorMessage && <p className='messageErrorStyle'>{errorMessage}</p>}
    </div>
  )
}
