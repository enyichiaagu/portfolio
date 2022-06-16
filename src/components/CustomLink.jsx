import React from 'react'
import { Link } from 'react-router-dom'

import { FaExternalLinkAlt } from 'react-icons/fa'

function CustomLink({to, text}) {
  return (
    <Link to={to} className="block">
      {text}
      {to.includes('http') && <FaExternalLinkAlt className='inline ml-1'/>}
    </Link>
  )
}

export default CustomLink