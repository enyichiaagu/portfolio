import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button({ moveTo, children }) {

  let navigate = useNavigate();

  return (
    <div 
      className='bg-primary text-white w-fit py-2 px-4 rounded cursor-pointer shadow-lg'
      onClick={() => navigate(moveTo)}
      >{children}
    </div>
  )
}

export default Button