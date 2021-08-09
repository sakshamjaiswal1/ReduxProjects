import React from 'react'
import "./App.css"

function Child(props) {


   
    return (
    
        <>
        <h4>
            `The value for number 1 is "{props.data}" and the value for number 2 is ""`
        </h4>
        {/* <button onClick={()=>reset()}>Reset</button> */}
        </>
    )
}

export default Child
