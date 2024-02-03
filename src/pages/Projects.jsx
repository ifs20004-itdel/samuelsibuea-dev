import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import data from '../data/projectList.jsx'

function Projects() {

  return (
    <div className='font-poppins'>
      <h1 className='font-bold pt-20 pb-5 text-3xl text-center'>My Projects</h1>
      <div className='py-10'>
      {
        data.map((project) => (
          <ProjectCard 
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Projects