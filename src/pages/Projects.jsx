import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import data from '../data/projectList.jsx'
import Navbar from '../components/Navbar.jsx'

function Projects() {

  return (
    <div className='font-poppins bg-gray-200'>
      <Navbar/>
      <h1 className='font-bold pt-10 md:pt-20 md:pb-5 text-3xl text-center'>My Projects</h1>
      <div className='md:py-10'>
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