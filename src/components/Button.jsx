import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({ moveTo, secondary, children }) {

  let navigate = useNavigate();

  return (
    <div 
      className={`${secondary ? 'bg-textGray' : 'bg-primary'} text-white w-fit py-2 px-4 rounded cursor-pointer shadow-lg mr-2 mb-2`}
      onClick={() => navigate(moveTo)}
      >{children}
    </div>
  )
}

export default Button