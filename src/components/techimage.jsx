import React from 'react'

function Techimage({ url, title }) {
  return (
    <div className='shadow-lg w-28 h-28 p-4'>
        <div className=''></div>
        <img src={url} alt={title}/>
    </div>
  )
}

export default Techimage