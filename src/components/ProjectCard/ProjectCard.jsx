import React from 'react'

function ProjectCard({
    image, title, description, link
}) {
  return (
    <div className='flex flex-row font-poppins p-10  bg-slate-700 w-3/4 rounded-3xl mx-auto my-7 space-x-7 hover:shadow-2xl  hover:bg-slate-800 animate-jump'>
        <img className=' bg-white rounded-lg align-middle justify-center object-cover hover:scale-105' src={image} alt={title} width={350} />
        <div className='flex flex-col bg-white rounded-lg p-5 w-full space-y-5'>
            <h1 className='font-bold text-xl text-green-700'>{title}</h1>
            <p>{description}</p>
            <div>
              <p className='font-bold text-md'>Link :</p>
              <a href={link} className=' italic text-blue-500 text-sm'>{link}</a> 
            </div>
        </div>
    </div>
  )
}

export default ProjectCard