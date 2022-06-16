import React from 'react'
import CustomLink from './CustomLink'

function Navbar() {
  return (
    <div className='flex justify-between px-10 py-5'>
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