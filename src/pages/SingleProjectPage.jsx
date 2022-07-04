import React from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'

import CustomLink from '../components/CustomLink';
import Title from '../components/Title';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

import projects from '../assets/projects.json'

function SingleProjectPage() {

  let { project } = useParams();
  const item = projects.find( entry => entry.slug === project )
  const { name, slug, subtitle, description, images, links } = item;

  return (
    <div className='container'>
        <p className='pt-10'>
          <CustomLink flow to='/projects'>projects</CustomLink>
          <AiOutlineRight className='inline'/>
          <CustomLink flow>{slug}</CustomLink>
        </p>
        <Title text={ name }/>
        <p>{ subtitle }</p>
        <div className='mb-20 mt-5'>
          <Carousel imageArray={images} />
        </div>
        <p className='pb-5'>{ description }</p>
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
  )
}

export default SingleProjectPage