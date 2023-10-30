import React, { useState } from 'react'

export default function Card({ id, image, name, info, price,removeTour }) {
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore ?info: `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className=''>
            <img src={image} alt="" />
            <div>
                <div>
                    <h4>{price}</h4>
                    <h4>{name}</h4>
                </div>
                <div>
                    {description}
                    <span onClick={readmoreHandler} className='cursor-pointer'>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button onClick={()=>{removeTour(id)}}>Not Interested</button>
        </div>
    )
}
