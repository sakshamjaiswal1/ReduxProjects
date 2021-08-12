const initialState=5

const multTheNumber=(state=initialState,action)=>{
switch(action.type){
    case "MULT":return state * action.payload
    case "DIVIDE": return state/5
    default:return state
}

}
export default multTheNumber
