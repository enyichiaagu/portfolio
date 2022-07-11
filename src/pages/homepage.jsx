import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import TechnicalSkills from '../components/TechnicalSkills'

import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'

import './Homepage.css'
import CustomLink from '../components/CustomLink'

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
                <div>
                    <p className='my-2'>Hello, My name is Amazing Enyichi Agu, and I'm passionate about solving problems using technology. I have 2+ years of experience in web development and use Javascript as my primary programming language.</p>
                    <p className='my-2'>I am also a community manager/tutor at <CustomLink to='https://www.youtube.com/channel/UCvpJno4cx0hxv7n5t707N7A' flow external>Codehouse</CustomLink>, an online community where I mentor upcoming programmers who don't have laptops yet, teaching them how to Code using their smartphones.</p>
                    <p className='my-2'>I also am a contract technical author at the <CustomLink to='https://blog.openreplay.com/authors/amazing-enyichi-agu' flow external>Openreplay blog</CustomLink>, and a contributor to <CustomLink to='https://www.freecodecamp.org/news/author/enyichi/' external flow>freeCodeCamp's blog</CustomLink>.</p>
                </div>
            </div>

            <TechnicalSkills />
            
            <div className='flex justify-end'>
                <Button moveTo={'projects'}>View my Projects <AiOutlineRight className='inline'/> </Button>
            </div>
        </div>
    </div>
  )
}

export default Homepage;