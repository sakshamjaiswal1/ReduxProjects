import React,{useRef,useEffect,useState} from 'react'
import "./camera.css"

function Camera() {
    const videoRef=useRef(null)
    const photoRef=useRef(null)
    const [hasphoto,sethasPhoto]=useState(false)

    const getVideo=()=>{
        navigator.mediaDevices.getUserMedia({
            video:{
                width:1280,height:720
            }
        }).then(stream=>{
            let video = videoRef.current
            video.srcObject=stream
            video.play()
        }).catch(err=>{
            console.error(err)
        })
    }

    useEffect(()=>{
        getVideo()
    },[videoRef])
    const takePhoto=()=>{
        const width=414
        const height= width/(16/9)
        let video = videoRef.current
        let photo = photoRef.current
       photo.width=width
       photo.height=height 
       let ctx = photo.getContext('2d');
       ctx.drawImage(video,0,0,width,height)
       sethasPhoto(true)

    }
const closePhoto=()=>{
    let photo = photoRef.current
    let ctx = photo.getContext('2d');
    ctx.clearRect(0,0,photo.width,photo.height)
sethasPhoto(false)

}

    return (
        <div className='App'>
        <div className="camera"  >
            <video ref={videoRef}></video>
        </div>
        <button onClick={takePhoto}>Snap</button>
        <div className={"result " + (hasphoto ? 'hasPhoto':"")}></div>
        <canvas ref={photoRef}></canvas>
        <button onClick={closePhoto}>Close</button>
        </div>
    )
}

export default Camera
