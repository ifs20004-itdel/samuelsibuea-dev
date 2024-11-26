import React from 'react'
import del from '/images/del.jpeg'
function PostCard() {

    const onClick = () => {
        window.open('/pdf/TOEFL.pdf')
    }

  return ( 
    <div className={`max-w-sm w-10/12 md:w-full m-auto rounded overflow-hidden shadow-lg hover:opacity-75 animate-fade-up`}>
        <img className="w-full" src={del} alt="IT Del" />
        <div className="px-6 py-4 text-gray-700">
            <div className="font-bold text-sm md:text-xl mb-2">Del Institute of Technology</div>
            <p className='italic text-xs md:text-sm font-bold '>Sep 2020 - September 2024</p>
            <p className="text-xs md:text-base pt-5">Bachelor Degree in Informatics - S.Kom</p>
            <p className='text-xs md:text-base pt-2'>TOEFL Score: 540 <span onClick={onClick} className='text-blue-700 cursor-pointer'>[Certificate]</span></p>
            <p className="text-xs md:text-base">Grade: 3.63/4.00 (GPA)</p>
        </div>
    </div>
  )
}

export default PostCard