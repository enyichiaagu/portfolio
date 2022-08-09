import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import TechnicalSkills from '../components/TechnicalSkills'

import { FaLinkedin, FaGithubSquare, FaDev } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'

import './HomePage.css'
import CustomLink from '../components/CustomLink'

function HomePage() {
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
                    <p className='my-2'>My Full Name is Amazing Enyichi Agu, and I'm passionate about solving problems using technology. I started teaching myself how to code when I was 17 because building new things fascinated me. Now, I use Javascript as my primary programming language.</p>
                    <p className="my-2">I am from a Third world Country, which means that not a lot of people who want to learn how to code here can easily afford laptops. For this reason, I created <CustomLink to='https://www.youtube.com/channel/UCvpJno4cx0hxv7n5t707N7A' flow external>Codehouse</CustomLink>. Codehouse is an online community where I teach people interested in tech how to code using their smartphones.</p>
                    <p className="my-2">I also find that writing articles on concepts I already know reinforce them making them much harder to forget. For this reason, I am a technical author on the <CustomLink to='https://blog.openreplay.com/authors/amazing-enyichi-agu' flow external>Openreplay blog</CustomLink>, and a <CustomLink to='https://www.freecodecamp.org/news/author/enyichi/' external flow>freeCodeCamp contributor.</CustomLink>.</p>
                    <p className="my-2">I am currently looking for a Full-time role in either of Front-End, Back-End, Full-Stack Web development, Technical Writing or Developer Relations. Feel free to reach out to me on my contact page. I will get your message as an email.</p>
                    <p className="my-2">Welcome to my Portfolio website, and have a great day.</p>
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

export default HomePage;
