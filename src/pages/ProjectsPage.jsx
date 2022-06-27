import React from 'react'
import Title from '../components/Title';
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/projects.json'

function ProjectsPage() {
  return (
    <div className='container'>
        <Title text="My projects"/>
        <div>
          <ProjectItem item={projects[0]}/>
        </div>
    </div>
  )
}

export default ProjectsPage;