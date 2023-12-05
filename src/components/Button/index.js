import React from 'react'
import "./Button.css"
const Button = ({buttonName}) => {
  return (

          <button className='main-btn' type="button">{buttonName}</button>

  )
}

export default Button