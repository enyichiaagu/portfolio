import React from 'react'
import { Link } from 'react-router-dom'

function Button({ moveTo='', external, secondary, children }) {

  const classList = `${secondary ? 'bg-textGray hover:bg-textGray-dark' : 'bg-primary hover:bg-primary-dark'} text-white w-fit py-2 px-4 rounded cursor-pointer hover:shadow-lg mr-2 mb-2 transition-shadow transition-colors`;

  return (
    external ?
    <a
      className={classList}
      href={moveTo}
      target='_blank'
      rel='noreferrer'
      >{children}
    </a> :
    <Link
      className={classList}
      to={moveTo}
      >{children}
    </Link>
  )
}

export default Button