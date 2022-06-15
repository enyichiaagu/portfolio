import React from 'react'
import Title from '../components/title'
import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import Subtitle from '../components/subtitle';
import Techimage from  '../components/techimage'

function Homepage() {
  return (
    <div>
        <div>
            <div className="h-64">
                <img 
                    src="https://i.imgur.com/R1HJNHz.jpg" 
                    alt="Headshot of Amazing Enyichi Agu"
                    className="h-full"
                />
            </div>
            <div>
                <div>
                    <span className="text-4xl font-semibold block">Hi. I'm</span>
                    <span className='block text-8xl font-semibold'>Enyichi</span>
                    <span className='block mt-6 font-bold'>Web Developer - Technical Writer</span>
                </div>
                <div>
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
        </div>
    </div>
  )
}

export default Homepage;