import {React,useState} from 'react'
import Child from './Child'



function Parent() {
  // const dd=8
  const [data,setData]=useState(null)
  function getData(e){
    setData(e.target.value)
    const dd=data
    console.log(data)
  }

    return (

        
       <>
       
       <label htmlFor="input1">Number 1</label>
       <input type="number" id='input1' onClick={getData} />

       <label htmlFor="input2">Number 2</label>
       <input type="number" id='input2'  />
       <button  >button</button>
       <Child data={data} />
       </>

    )
}

export default Parent
