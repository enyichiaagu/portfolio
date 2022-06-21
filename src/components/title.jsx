import React from 'react'

function Title({ text }) {
  return (
    <div className='text-4xl font-bold text-primary pb-4 pt-4'>{text.toUpperCase()}</div>
  )
}

export default Title