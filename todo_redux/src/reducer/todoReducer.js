const initialData={
    list:[]
}

const todoReducer =(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":

        const {id,data}=action.payload
        return {
            ...state,
            list:[
                ...state.list,
                {
                      id:id,  
                    data:data
            }]
        }
        case "DELETE_TODO":

  const newlist=state.list.filter((elem)=>elem.id!==action.id)
            return {
                ...state,
                list:newlist
              
            }
        case  "REMOVE_ALL":
            return{
                ...state,
                list:[]
            }   

        default:return state
    }
}

export default todoReducer