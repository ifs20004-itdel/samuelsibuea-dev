import React from 'react'

function Subtitle({
    title
}) {
  return (
    <h1 className='font-poppins font-semibold tracking-wider bg-gradient-to-br from-sky-600 bg-sky-800 text-white text-sm md:text-base px-5 py-1 my-2 w-fit rounded-xl shadow-md hover:shadow-sm '>{title}</h1>
  )
}

export default Subtitle