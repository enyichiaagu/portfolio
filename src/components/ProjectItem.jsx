import React from 'react'

import Subtitle from './Subtitle'
import Button from './Button'

function ProjectItem({ item }) {

  const { name, slug, subtitle, images, links } = item;

  return (
    <div className='w-full sm:w-[48%] bg-white shadow-md hover:shadow-xl mb-10 transition-shadow transition-shadow'>
        <img src={images[0]} className="w-full" alt="For the components"/>
        <div className='p-2'>
            <Subtitle text={name}/>
            <p>{subtitle}</p>
            <div className='my-4'>
              <Button moveTo={slug}>View Full Description</Button>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem