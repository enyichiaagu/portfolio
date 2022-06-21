import React from 'react'

function Button({ children }) {
  return (
    <div className='bg-primary text-white w-fit py-2 px-4 rounded cursor-pointer shadow-lg'>{children}</div>
  )
}

export default Button