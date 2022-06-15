import React from 'react'
import CustomLink from './CustomLink'

function Footer() {
  return (
    <div className='bg-primary'>
        <div>
            <CustomLink to="/">Hello World</CustomLink>
        </div>
        <div></div>
    </div>
  )
}

export default Footer