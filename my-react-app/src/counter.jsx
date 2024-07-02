import { useState } from "react";

function Counter (){
    const [age,setAge] = useState(0)
    const increment =()=>{
        setAge(age +1)
    }
    const dincrement =()=>{
        setAge(age - 1)
    }
    const Reset =()=>{
        setAge(0)
    }

    return (
        <>
        <h1>Age</h1>
        <h1>{age}</h1>
        <button onClick={increment}>inc</button>
        <button onClick={dincrement}>dic</button>
        <button onClick={Reset}> Reset</button>

        </>
    )

}
export default Counter ;