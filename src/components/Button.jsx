import React from 'react'

function Button({ text }) {
  return (
    <div className='bg-primary text-white w-fit p-2 rounded cursor-pointer shadow-lg'>{text}</div>
  )
}

export default Button