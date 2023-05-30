import React,{useState} from "react";

export const AddCalculator = () => {
    // a state that has a variable state and a setter
    let[total,setTotal]=useState(0)
    
    // this is a function that has 1 parameter and we can give 
    // the value that we want inside this function
    const onhandleClick=(number)=>{
        setTotal(total+=number)

    }
    return (
        <>
            <button onClick={()=>onhandleClick(1)}>Add 1</button>
            <button onClick={()=>onhandleClick(2)}>Add 2</button>
            <button onClick={()=>onhandleClick(3)}>Add 3</button>
            <br></br>
            {/* display my total */}
            Total:{total}
        </>
    )
}