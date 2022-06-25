import React from 'react'
import CustomLink from './CustomLink'

function Navbar() {

  

  return (
    <div className='flex justify-between h-12 items-center px-6 bg-primary text-white'>
        <span className='block text-2xl font-semibold cursor-pointer'>
          <CustomLink to='/' text='Portfolio'/>
        </span>
        <div className='justify-between hidden sm:flex'>
            <CustomLink to="/" text="Home"/>
            <CustomLink to="/" text="Projects"/>
            <CustomLink to="/" text="Contact"/>
            <CustomLink to="http" text="Blog"/>
        </div>
        <div className=' h-5 flex flex-col justify-between sm:hidden'>
          <div className='h-0.5 w-8 bg-white'></div>
          <div className='h-0.5 w-8 bg-white'></div>
          <div className='h-0.5 w-8 bg-white'></div>
        </div>
    </div>
  )
}

export default Navbar