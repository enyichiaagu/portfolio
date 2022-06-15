import React from 'react'

function Techimage({ url, title }) {
  return (
    <div className='h-28 border-black border-2 w-28'>
        <div className='h-28 w-28 bg-sky-400 absolute'></div>
        <img src={url} alt={title} className="h-20"/>
    </div>
  )
}

export default Techimage