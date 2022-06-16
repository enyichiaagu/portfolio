import React from 'react'
import CustomLink from './CustomLink'

function Footer() {
  return (
    <div className='bg-primary p-10 flex justify-center text-white'>
        <div className='mr-4'>
            <CustomLink to="/" text="Home"/>
            <CustomLink to="/" text="Projects"/>
            <CustomLink to="/" text="Contact"/>
            <CustomLink to="http" text="Blog"/>
        </div>
        <div className='ml-4'>
            <CustomLink to="http" text="Github"/>
            <CustomLink to="http" text="Dev.to"/>
            <CustomLink to="http" text="LinkedIn"/>
        </div>
    </div>
  )
}

export default Footer