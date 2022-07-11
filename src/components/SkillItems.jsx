import React from 'react'
import Subtitle from './Subtitle'
import Techimage from './Techimage'

function SkillItems({ name, images=[] }) {
  return (
    <div>
        <Subtitle text={name}/>
        <div className='flex mb-4 flex-wrap'>
            {
                images.map((tech, index) => (
                    <Techimage
                        key={index} 
                        url={tech.src}
                        title={tech.title}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SkillItems