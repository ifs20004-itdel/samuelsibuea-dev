import React from 'react'
import { MdZoomIn } from "react-icons/md";

function Certificate({
    image,
    title
}) {
    const [isHover, setIsHover] = React.useState(false)
    const handleHover = () => {
        setIsHover(!isHover);
    }

    const handleZoomIn = () => {
        window.open(image)
    }

  return (
    <div class={`relative max-w-sm rounded-lg overflow-hidden cursor-pointer hover:opacity-65 md:my-0 my-5`} onMouseEnter={handleHover} onMouseLeave={handleHover} >
        <img class="w-full h-full object-cover shadow-xl" src={image} alt={title} />
        {
            isHover &&
            <div class="absolute top-0 left-0 w-full h-full px-6 py-4 bg-black bg-opacity-50 animate-jump ">
                <div className='object-cover h-full flex flex-col space-y-3 justify-center align-middle items-center'>
                    <p className='text-white font-bold text-lg'>{title}</p>
                    <div>
                        <MdZoomIn size={45} color='white' className='hover:fill-green-400 ' onClick={handleZoomIn}/>
                    </div>
                </div>
            </div> 
        }
    </div>
  )
}

export default Certificate