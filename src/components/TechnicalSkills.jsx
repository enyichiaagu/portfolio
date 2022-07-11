import React from 'react'

import Title from './Title'
import SkillItems from '../components/SkillItems'

import assets from '../assets/assets.json'

const languages = [], technologies = [], tools = [];

assets.forEach(asset => {
    if (asset.type === 'lang') languages.push(asset);
    else if (asset.type === 'tech') technologies.push(asset);
    else tools.push(asset);
})

function TechnicalSkills() {
  return (
    <div className="mb-16 sm:mb-32">
        <Title text="Technical Skills"/>
        <SkillItems name="Languages" images={languages} />
        <SkillItems name="Technologies" images={technologies} />
        <SkillItems name="Tools" images={tools} />
    </div>
  )
}

export default TechnicalSkills;