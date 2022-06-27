import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({to="", children}) {
  return (
    <Link to={to} className="block hover:text-rose-200">
      {children}
    </Link>
  )
}

export default CustomLink