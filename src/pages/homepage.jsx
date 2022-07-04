import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import SkillItems from '../components/SkillItems'

import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'

import './Homepage.css'

import assets from '../assets/assets.json'

function Homepage() {
  return (
    <div className=''>
        <div className='flex justify-center items-center flex-col py-12 sm:py-48 rounded-b-3xl hero text-white min-h-[50vh]'>
            <div className=''>
                <div className='text-center mt-4 sm:mt-0'>
                    <span className="sm:text-4xl text-2xl font-semibold block">Hi. I'm</span>
                    <span className='block text-5xl sm:text-8xl font-russo'>Enyichi</span>
                    <span className='block mt-2 font-bold text-xl sm:text-3xl'>Web Developer - Technical Writer</span>
                </div>
                <div className='flex mt-6 w-32 justify-between mx-auto'>
                    <a href="http://linkedin.com/in/enyichiaagu" target="_blank" rel="noreferrer">
                        <FaLinkedin className='text-4xl hover:text-rose-200'/>
                    </a>
                    <a href="http://github.com/enyichiaagu" target="_blank" rel="noreferrer">
                        <FaGithubSquare className='text-4xl hover:text-rose-200'/>
                    </a>
                    <a href="http://dev.to/enyichiaagu" target="_blank" rel="noreferrer">
                        <FaDev className='text-4xl hover:text-rose-200'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='container'>
            <div>
                <Title text="My Story"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facere asperiores consectetur. Expedita commodi, id veniam harum impedit maxime esse earum quae quo, delectus praesentium! Dicta quae at officia, dolor minima amet distinctio maiores. Repellendus impedit assumenda officia unde distinctio nemo quia beatae consectetur? Odio minus nesciunt sequi cumque aliquam.
                </p>
            </div>
            <div className="mb-16 sm:mb-32">
                <Title text="Technical Skills"/>
                {
                    assets.map(({name, images}, index) => (
                        <SkillItems name={name} images={images} key={index}/>
                    ))
                }
            </div>
            <div className='flex justify-end'>
                <Button moveTo={'projects'}>View my Projects <AiOutlineRight className='inline'/> </Button>
            </div>
        </div>
    </div>
  )
}

export default Homepage;