import React from 'react'
import "./Button.css"

export const Button = ({buttonName,onClick,disabled}) => {
  return (
          <button disabled={disabled} onClick={onClick} className='main-btn' type="button">{buttonName}</button>
  )
}