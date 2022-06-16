import React from 'react'
import Title from '../components/Title'
import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import Subtitle from '../components/Subtitle';
import Techimage from  '../components/Techimage'
import Button from '../components/Button'

function Homepage() {
  return (
    <div>
        <div className='flex justify-center'>
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
        <div>
            <div>
                <Title text="My Story"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facere asperiores consectetur. Expedita commodi, id veniam harum impedit maxime esse earum quae quo, delectus praesentium! Dicta quae at officia, dolor minima amet distinctio maiores. Repellendus impedit assumenda officia unde distinctio nemo quia beatae consectetur? Odio minus nesciunt sequi cumque aliquam.
                </p>
            </div>
            <div>
                <Title text="Technical Skills"/>
                <div>
                    <Subtitle text="Languages"/>
                    <div>
                        <Techimage 
                            url="https://www.svgrepo.com/show/353884/html-5.svg" 
                            title="Hello"
                        />
                    </div>
                </div>
            </div>
            <Button text="Hello World" />
        </div>
    </div>
  )
}

export default Homepage;