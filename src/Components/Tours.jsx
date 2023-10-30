import React from "react";
import Card from "./Card";
const Tours=({tours,removeTour})=>{
    return(
        <div>
            <div>
                <h2>Tour with Aryan</h2>
            </div>
            <div>
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
        
    )
}

export default Tours;