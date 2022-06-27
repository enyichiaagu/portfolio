import React from 'react'
import CustomNavLink from './CustomNavLink'
import CustomLink from './CustomLink'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Navbar() {

  return (
    <div className='flex justify-between px-3 py-2 bg-primary text-white flex-col items-left sm:flex-row sm:px-6 items-center'>
        <span className='block text-2xl font-semibold cursor-pointer'>
          <CustomLink to='/'>Portfolio</CustomLink>
        </span>
        <div className='justify-between flex w-full pt-2 sm:pt-0 sm:w-80'>
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="projects">Projects</CustomNavLink>
          <CustomNavLink to="contact">Contact</CustomNavLink>
          <a href="http://" className='block hover:text-rose-200'>Articles <FaExternalLinkAlt className='inline'/></a>
        </div>
    </div>
  )
}

export default Navbar