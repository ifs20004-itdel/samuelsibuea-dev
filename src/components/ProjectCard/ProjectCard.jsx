import React from 'react'

function ProjectCard({
    image, title, description, link
}) {
  return (
    <div className='flex flex-col md:flex-row font-poppins p-5 md:p-10  bg-slate-700 w-11/12 md:w-3/4 rounded-3xl mx-auto my-7 space-y-5 md:space-y-0 md:space-x-7 hover:shadow-2xl  hover:bg-slate-800 animate-jump'>
        <img className=' bg-white rounded-lg align-middle justify-center object-cover hover:scale-105' src={image} alt={title} width={350} />
        <div className='flex flex-col bg-white rounded-lg p-5 w-full space-y-5'>
            <h1 className='font-bold md:text-xl text-base text-green-700'>{title}</h1>
            <p className='md:text-base text-sm'>{description}</p>
            <div>
              <p className='font-bold text-md'>Link :</p>
              <a href={link} className=' italic text-blue-500 text-xs md:text-sm '>{link}</a> 
            </div>
        </div>
    </div>
  )
}

export default ProjectCard