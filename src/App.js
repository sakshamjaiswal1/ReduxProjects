import React from "react";
import "./App.css"
import EntryForm from "./Pages/dummyForm/EntryForm";
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber,multNumber,divideNumber} from "./actions/index"
function App() {
  
const myState = useSelector(state => state.changeTheNumber)
const dispatch = useDispatch()
const myState2 = useSelector(state => state.multTheNumber)
  
  return(


<>
<div className="container">
  <h1>Increment/Decrement counter</h1>
  <h4>Using react and redux</h4>
  <div className="quantity ">
    <a  title='Decrement' className="quantity__minus" onClick={()=>dispatch(decNumber())}><span>-</span></a>
<input type="text" className="quantity__input" name='quantity' value={myState} />
    <a  title='Decrement' className="quantity__plus " onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
  </div>
</div>
<div className="container">
  <h1>Multiplication</h1>
  <h4>Using react and redux</h4>
  <div className="quantity ">
    <a  title='Divide' className="quantity__minus" onClick={()=>dispatch(divideNumber())}><span>/</span></a>
<input type="text" className="quantity__input" name='quantity' value={myState2} />
    <a  title='Multiply' className="quantity__plus " onClick={()=>dispatch(multNumber(5))}><span>*</span></a>
  </div>
</div>
</>

  )
}

export default App;
