import React from 'react'
import CustomLink from './CustomLink'
import { FaExternalLinkAlt } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-primary p-10 flex justify-center text-white'>
        <div className='mr-4'>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="projects">Projects</CustomLink>
          <CustomLink to="/">Contact</CustomLink>
          <a href="http://" className='block hover:text-rose-200'>Articles <FaExternalLinkAlt className='inline'/></a>
        </div>
        <div className='ml-4'>
          <a href="http://github.com/enyichiaagu" className='block hover:text-rose-200'>Github <FaExternalLinkAlt className='inline'/></a>
          <a href="http://dev.to/enyichiaagu" className='block hover:text-rose-200'>Dev.to <FaExternalLinkAlt className='inline'/></a>
          <a href="http://linkedin.com/in/enyichiaagu" className='block hover:text-rose-200'>LinkedIn <FaExternalLinkAlt className='inline'/></a>
        </div>
    </div>
  )
}

export default Footer