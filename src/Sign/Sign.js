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
        <div className='signature'>
            <button onClick={clear}>Clear</button>
            <button onclick={save}>Save</button>
            <button onClick={show}>Show</button>

        <SignaturePad ref={sigPad} />
        {/* <div>{data}</div> */}
        </div>
    )
}

export default Sign
