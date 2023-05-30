import React, {useState} from "react";

export const NumberBuilder = () => {
    // Creating 2 states
    let[number,setNumber]=useState(0)
    let[str,setStr]=useState("")
    
    // The function that handle Addnumber
    const onHandleClick= ()=>{
        setNumber(++number)
        setStr(str+=number +" ")
    }
   // The function that Reset 
    const onHandleReset= ()=>{
        setNumber(0)
        setStr("")
    }
// comment

    return (
        <>
            <button onClick={()=>onHandleClick()}>Add Number</button>
            <button onClick={()=>onHandleReset()}>Reset</button>
            <br></br>
            Numbers: {str}
        </>
    )
}