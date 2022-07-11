import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({ moveTo, secondary, children }) {

  let navigate = useNavigate();

  return (
    <div 
      className={`${secondary ? 'bg-textGray hover:bg-textGray-dark' : 'bg-primary hover:bg-primary-dark'} text-white w-fit py-2 px-4 rounded cursor-pointer hover:shadow-lg mr-2 mb-2 transition-shadow transition-colors `}
      onClick={() => navigate(moveTo)}
      >{children}
    </div>
  )
}

export default Button