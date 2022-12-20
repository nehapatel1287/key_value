import React, { useEffect, useState } from 'react'

const KeyCode = () => {
    const [key,setKey]=useState("")

    const keypressed=(event)=>{
        setKey(event.keyCode)
    }

    useEffect(()=>{
        
    },[])
  return (
    <div style={{marginTop:'2%'}}>
    <input type="text" onKeyDown={(e) => keypressed(e)} />
    <p>Key code is: {key}</p>
    </div>
    
    
    
    
  )
}

export default KeyCode