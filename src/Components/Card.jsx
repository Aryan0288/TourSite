import React, { useState } from 'react'

export default function Card({ id, image, name, info, price,removeTour }) {
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore ?info: `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className='rounded-md p-[1rem] m-[1rem] flex items-center flex-col gap-3 w-[25rem] h-max  shadow-[0px_3px_8px_rgba(0,0,0,0.24)] text-[17px]'>
            <img src={image} alt="" className='w-[23rem] bg-cover aspect-square' />
            <div>
                <div>
                    <h4 className='text-green-600 font-bold'>&#8377; {price}</h4>
                    <h4 className='font-bold'>{name}</h4>
                </div>
                <div className='text-justify '>
                    {description}
                    <span onClick={readmoreHandler} className='cursor-pointer text-[#12b0e8]'>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button  onClick={()=>{removeTour(id)}} className='bg-slate-400 py-1 px-20 font-700 rounded-md hover:bg-slate-500 hover:text-white transition-all duration-[0.5s] hover:rounded-none'>Not Interested</button>
        </div>
    )
}
