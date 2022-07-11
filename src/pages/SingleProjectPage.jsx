import React from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'

import CustomLink from '../components/CustomLink';
import Title from '../components/Title';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import SkillItems from '../components/SkillItems'

import projects from '../assets/projects.json'
import assets from '../assets/assets.json'
import Subtitle from '../components/Subtitle';

function SingleProjectPage() {

  let { project } = useParams();
  const item = projects.find( entry => entry.slug === project )
  const { name, slug, subtitle, description, images, links, stack } = item

  const filteredAssets = assets.filter(asset => {
    let match = false;
    stack.forEach(skill => {
      asset.title === skill && (match = true);
    })
    return match;
  })

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
        <Subtitle text='Description' />
        <p className='pb-5'>{ description }</p>
        
        <SkillItems name="Stack" images={filteredAssets} />

        <Subtitle text='External Links' />
        <div className='my-4 flex flex-wrap'>
          {
            links.map((entry, index) => {
              return <Button
                secondary={ entry.name !== 'Live' }
                moveTo={entry.src}
                external
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