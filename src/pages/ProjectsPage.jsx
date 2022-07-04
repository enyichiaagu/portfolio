import React from 'react'
import Title from '../components/Title';
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/projects.json'

function ProjectsPage() {
  return (
    <div className='container'>
        <Title text="My projects"/>
        <div className='my-6 flex flex-wrap justify-between'>
          {
            projects.map((project, index) => {
              return <ProjectItem item={project} key={index} />
            })
          }
        </div>
    </div>
  )
}

export default ProjectsPage;