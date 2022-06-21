import React from 'react'
import Subtitle from './Subtitle'
import Techimage from './Techimage'

function SkillItems({ name, images }) {
  return (
    <div>
        <Subtitle text={name}/>
        <div className='flex'>
            {
                images.map((url, index) => (
                    <Techimage
                        key={index} 
                        url={url}
                        title={'tool'}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SkillItems