import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo,removeTodo} from '../action/index'
import "./todo.css"

function Todo() {
const [inputData,setInputData]=useState('')
const dispatch =useDispatch()
const list = useSelector(state => state.todoReducer.list)
    return (
      <>
     <div className="main-div">
       <div className="child-div">
<figure>
  <figcaption className='figure'>
    Add your list here
  </figcaption>
</figure>
<div className="addItems">

  <input type="text" placeholder='Add Items' value={inputData} 
  onChange={(event)=>setInputData(event.target.value)  } className='input'
  />
</div>
<button className='fa fa-plus add-btn btn' onClick={()=>{dispatch(addTodo(inputData))
setInputData('')}}>Add Items</button>
       </div>
<div className="showItems item-con">
  {
    list.map((elem)=>{
      return(
        
      <div className="eachItem" key={elem.id} id={elem.id}className='item-div' >
      <h3>{elem.data}</h3>
      <button className='far fa-trash-alt add-btn btn' onClick={()=>{dispatch(deleteTodo(elem.id))
  setInputData('')}} >Delete</button>  
    </div>
  
    )
    })
  }

</div>
<div className="showItems">
  <button className='btn'  onClick={()=>{dispatch(removeTodo())}}><span>Check List</span></button>
</div>
     </div>
    </>

    )
}

export default Todo
