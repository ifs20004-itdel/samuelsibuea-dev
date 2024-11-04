import React from 'react'
import del from '/images/del.jpeg'
function PostCard() {

    const onClick = () => {
        window.open('https://www.del.ac.id/')
    }

  return ( 
    <div class={`max-w-sm rounded overflow-hidden shadow-lg hover:opacity-75 cursor-pointer animate-fade-up`} onClick={onClick}>
        <img class="w-full" src={del} alt="IT Del" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Del Institute of Technology</div>
            <p className=' italic text-sm font-bold '>Sep 2020 - September 2024</p>
            <p class="text-gray-700 text-base pt-5">Bachelor Degree in Informatics - S.Kom</p>
            <p class="text-gray-700 text-base pt-2">Grade: 3.63/4.00 (GPA)</p>
        </div>
    </div>
  )
}

export default PostCard