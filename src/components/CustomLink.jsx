import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({to="", flow, children}) {
  return (
    <Link to={to} className={`hover:text-rose-200 ${ flow ? 'inline text-rose-500' : 'block' }`}>
      {children}
    </Link>
  )
}

export default CustomLink