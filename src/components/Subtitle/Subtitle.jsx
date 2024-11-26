import React from 'react'

function Subtitle({
    title
}) {
  return (
    <div className='md:w-1/4 text-center bg-gradient-to-br from-sky-600 bg-sky-800 py-1 my-2 rounded-xl shadow-md hover:shadow-sm'>
      <h1 className='font-poppins font-semibold tracking-wider text-white text-sm md:text-base'>{title}</h1>

    </div>
  )
}

export default Subtitle