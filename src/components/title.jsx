import React from 'react'

function Title({ text }) {
  return (
    <div className='text-4xl font-bold text-primary'>{text.toUpperCase()}</div>
  )
}

export default Title