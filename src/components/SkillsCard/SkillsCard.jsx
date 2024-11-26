import React from 'react'

function SkillsCard({
    title,
    image
}) {
  return (
    <div className='flex align-middle items-center space-x-5 bg-slate-800 hover:bg-slate-700  w-1/4 rounded-2xl px-3 py-2'>
        <img src={image} alt={title} width={45} />
        <p className='hidden md:block font-bold tracking-wider font-poppins text-white'>{title}</p>  
    </div>
  )
}

export default SkillsCard