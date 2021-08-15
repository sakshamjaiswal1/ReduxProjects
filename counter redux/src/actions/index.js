export const incNumber =(num)=>{
return{type:"INCREMENT",
payload: num}

}
export const decNumber =()=>{
 return{type:"DECREMENT"}
}
export const multNumber =(num)=>{
    return{type:"MULT",payload: num}
   }
export const divideNumber =()=>{
    return{type:"DIVIDE"}
   }
      