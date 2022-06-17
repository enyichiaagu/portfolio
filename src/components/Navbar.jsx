import React from 'react'
import CustomLink from './CustomLink'

function Navbar() {
  return (
    <div className='flex justify-between h-12 border-black border-2 items-center px-6'>
        <span className='block text-2xl font-semibold'>Portforlio</span>
        <div className='flex w-1/4 justify-between'>
            <CustomLink to="/" text="Home"/>
            <CustomLink to="/" text="Projects"/>
            <CustomLink to="/" text="Contact"/>
            <CustomLink to="http" text="Blog"/>
        </div>
    </div>
  )
}

export default Navbar