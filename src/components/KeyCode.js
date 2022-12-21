import React, { useEffect, useState } from 'react'

const KeyCode = () => {
    const [key,setKey]=useState("")
    const[capture,setCapture]=useState("")

    const keypressed=(event)=>{
        setKey(event.keyCode)
        
    }

    useEffect(()=>{
        document.addEventListener('keydown',letter,true)
    },[])

    const letter=(e)=>{
        setCapture(e.key)
    }

  return (
    <div style={{marginTop:'2%'}}>
    <input type="text" onKeyDownCapture={(e) => keypressed(e)} value={capture}/>
    <p>Key Pressed {capture} ,Key code is: {key}</p>
    </div>
    
    
    
    
  )
}

export default KeyCode