import React from 'react'

function Techimage({ url, title }) {
  return (
    <div className='shadow-md p-4 m-2 bg-white h-fit'>
        <div className='w-full'>
          <img src={url} alt={title} className="w-12 sm:w-20 mx-auto"/>
        </div>
        <hr className='my-2'/>
        <div className='text-center'>{ title }</div>
    </div>
  )
}

export default Techimage