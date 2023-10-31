import React from "react";
import Card from "./Card";
const Tours=({tours,removeTour})=>{
    return(
        <div className="flex items-center justify-center flex-col">
            <div>
                <h2 className="text-center text-4xl mt-5 font-bold select-none">Tour with Aryan</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-[1300px] mx-auto">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
        
    )
}

export default Tours;