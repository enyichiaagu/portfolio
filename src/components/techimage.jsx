import React from 'react'

function Techimage({ url, title }) {
  return (
    <div className='shadow-md w-28 h-28 p-4 mx-4'>
        <div className=''></div>
        <img src={url} alt={title} className="w-full"/>
    </div>
  )
}

export default Techimage