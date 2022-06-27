import React, { useEffect } from 'react'
import Subtitle from './Subtitle'
import { Link } from 'react-router-dom'
import Button from './Button'

function ProjectItem({ item }) {
  
  const overview = item.description.length > 50 ? item.description.slice(0, 50) : item.description

  return (
    <div className='w-80 bg-white shadow-md'>
        <img src={item.images[0]} className="w-full"/>
        <div className='p-2'>
            <Subtitle text={item.name}/>
            <p>{overview}<Link to={item.name.toLowerCase()} className="hover:text-rose-200"> ...see more</Link></p>
            {/* {
                typeof item.code === 'object' ? 
                () :  */}
                <Button moveTo={item.code.front_end}>Button</Button>
        </div>
    </div>
  )
}

export default ProjectItem