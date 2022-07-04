import React from 'react'
import CustomLink from './CustomLink'
import { FaExternalLinkAlt } from 'react-icons/fa'

import Subtitle from './Subtitle'
import Button from './Button'

function ProjectItem({ item }) {

  const { name, slug, subtitle, images, links } = item;

  return (
    <div className='w-full sm:w-[48%] bg-white shadow-md mb-10'>
        <img src={images[0]} className="w-full" alt="For the components"/>
        <div className='p-2'>
            <Subtitle text={name}/>
            <p>{subtitle}<CustomLink to={slug} flow> ... see more</CustomLink></p>
            <div className='my-4 flex flex-wrap'>
              {
                links.map((entry, index) => {
                  return <Button
                    secondary={ entry.name !== 'Live' }
                    key={index}>
                    {entry.name} 
                    <FaExternalLinkAlt 
                    className='inline ml-2'/> 
                  </Button>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default ProjectItem