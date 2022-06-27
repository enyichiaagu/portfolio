import React from 'react'

function Title({ text }) {
  return (
    <div className='text-2xl sm:text-4xl font-bold text-primary pt-10 pb-2'>{text.toUpperCase()}</div>
  )
}

export default Title