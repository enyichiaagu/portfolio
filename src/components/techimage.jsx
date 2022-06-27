import React from 'react'

function Techimage({ url, title }) {
  return (
    <div className='shadow-md w-20 sm:w-28 h-20 sm:h-28 p-4 m-2 bg-white'>
        <div className=''></div>
        <img src={url} alt={title} className="w-full"/>
    </div>
  )
}

export default Techimage