import React from 'react'
import Title from '../components/Title'
import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import Button from '../components/Button'
import SkillItems from '../components/SkillItems'
import assets from '../assets/assets.json'
import { AiOutlineRight } from 'react-icons/ai'

function Homepage() {
  return (
    <div className='pb-16'>
        <div className='flex justify-center border-black border-2 py-48 rounded-b-3xl mb-12'>
            <div className="h-64 w-64 mr-5 overflow-hidden rounded-full">
                <img 
                    src="https://i.imgur.com/R1HJNHz.jpg" 
                    alt="Headshot of Amazing Enyichi Agu"
                    className="h-64 object-cover"
                />
            </div>
            <div className='ml-5'>
                <div>
                    <span className="text-4xl font-semibold block">Hi. I'm</span>
                    <span className='block text-8xl font-semibold'>Enyichi</span>
                    <span className='block mt-6 font-bold'>Web Developer - Technical Writer</span>
                </div>
                <div className='flex mt-2 w-32 justify-between'>
                    <FaLinkedin className='text-4xl'/>
                    <FaGithubSquare className='text-4xl'/>
                    <FaDev className='text-4xl'/>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div>
                <Title text="My Story"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facere asperiores consectetur. Expedita commodi, id veniam harum impedit maxime esse earum quae quo, delectus praesentium! Dicta quae at officia, dolor minima amet distinctio maiores. Repellendus impedit assumenda officia unde distinctio nemo quia beatae consectetur? Odio minus nesciunt sequi cumque aliquam.
                </p>
            </div>
            <div className="mb-32">
                <Title text="Technical Skills"/>
                {
                    assets.map(({name, images}) => (
                        <SkillItems name={name} images={images}/>
                    ))
                }
            </div>
            <div className='flex justify-end'>
                <Button>View my Projects <AiOutlineRight className='inline'/> </Button>
            </div>
        </div>
    </div>
  )
}

export default Homepage;