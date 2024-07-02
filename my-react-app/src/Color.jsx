import { useState } from "react";

function Color (){
    

    const [color,setColor] = useState('#FFFFFF')
    const pickColor =(event) =>{
        setColor(event.target.value)
    }
    return(
        <>
        <h1>COLOR PICKER</h1>
        <h3 style={{background : color}}>color </h3>
        <p>pick a color 
            <input  type="color" onChange={pickColor}/>
        </p>
        <p>the color picked is {color}</p>
        </>
    )
}
export default Color;