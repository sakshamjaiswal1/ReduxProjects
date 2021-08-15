import {React,useRef} from 'react'
import SignaturePad from 'react-signature-canvas'
import './sign.css'


function Sign() {
    let sigPad=useRef({})
  let data=''
    const clear=()=>{
        sigPad.current.clear()
    }
    const save=()=>{
        data=sigPad.current.toDataURL()
      
    }
    const show=()=>{
        sigPad.current.fromDataURL(data)
    }

    return (
 
     
        <SignaturePad ref={sigPad}  canvasProps={{width: 500, height: 200}} />
  
    )
}

export default Sign
