import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomNavLink({to, children}) {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? "text-rose-200 block font-bold" : "block hover:text-rose-200"}>
      {children}
    </NavLink>
  )
}

export default CustomNavLink