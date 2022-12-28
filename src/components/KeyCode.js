import React, { useEffect, useState } from 'react'

const KeyCode = () => {
    const [key,setKey]=useState("")
    const[capture,setCapture]=useState("")

    const keypressed=(event)=>{
        setKey(event.keyCode)
    }

    // useEffect(()=>{
    //     document.addEventListener('keydown',letter,true)
    //     return ()=> document.removeEventListener('keydown',letter)
    // },[])

    // const letter=(e)=>{
    //     setCapture(e.key)
    // }

  return (
    <div style={{marginTop:'2%',backgroundColor:'aqua'}} >
    <input type="text" onKeyDown={(e) => keypressed(e)} onChange={e=>setCapture(e.target.value)} value={capture}/>
    <p>Key Pressed {capture} ,Key code is: {key}</p>
    </div>
    
    
    
    
  )
}

export default KeyCode