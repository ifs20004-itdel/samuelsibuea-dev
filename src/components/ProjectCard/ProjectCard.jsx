import React from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ProjectCard({
    image, title, description, link
}) {
  return (
    <div className='flex flex-col py-5 m-5 align-middle gap-y-5 bg-gradient-to-br from-sky-700 to-sky-500 text-white rounded-3xl shadow-lg shadow-slate-400'>
        <h1 className=' line-clamp-2 text-center md:text-xl font-wicked tracking-wider'>{title}</h1>
        <div className='flex flex-col gap-y-5 w-3/4 m-auto'>
          <Zoom>
            <img className='object-cover hover:scale-105' src={image} />
          </Zoom>
          <p className='line-clamp-4'>{description}</p>
          <a className='font-bold hover:bg-gradient-to-l bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 w-1/2 py-3 px-2 text-center rounded-xl' href={link}>Get Project</a>
        </div>
    </div> 

  )
}

export default ProjectCard