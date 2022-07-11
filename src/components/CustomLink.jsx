import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function CustomLink({to="", external, flow, children}) {

  const classList = `hover:text-rose-200 ${ flow ? 'inline text-rose-500' : 'block' }`;
  return (
    external ?
    <a href={to} className={classList} target='_blank' rel='noreferrer'>
      {children} <FaExternalLinkAlt className='inline'/>
    </a> :
    <Link to={to} className={classList}>
      {children}
    </Link>
  )
}

export default CustomLink