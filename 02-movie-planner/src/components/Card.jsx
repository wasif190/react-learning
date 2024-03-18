import React, { useState } from 'react'

function Card({ id, image, title, description, removeHandler}) {
    const[readmore, setReadmore] = useState(false);

    const readmoreHandler = () => {
        setReadmore(!readmore);
    }

    const infoDesc = readmore ? description : `${description.substring(0, 200)}...`

    return (
        <div className='w-[330px] h-max p-5 border border-[#ccc] rounded-md'>
            <div className='w-full'>
                <img src={image} className='aspect-square rounded'/>
            </div>
            <h1 className='text-2xl font-semibold my-2'>{title}</h1>
            <p className='text-[.9rem]'>
                {infoDesc}
                <span onClick={readmoreHandler} className='text-[#4055f8]'>
                    {readmore ? `Show less` : `Read more`}
                </span>
            </p>

            <button 
              onClick={() => removeHandler(id)} 
              className='mt-2 py-1 w-full border-[1px] border-[#b4161b] cursor-pointer rounded-md 
              text-lg bg-[#b4161b21] hover:bg-red-600 hover:text-white transition-all duration-300'>
                Not Interested
            </button>
        </div>
    )
}

export default Card
