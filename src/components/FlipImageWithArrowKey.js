import React, { useEffect, useState } from 'react';
import './style.css/flipImageWithArrowKey.css';

const FlipImageWithArrowKey = () => {
    const [screen, setScreen] = useState({
        active:false,
        transform:""
    });

        console.log(screen.transform);

    const keypressed = (event) => {
        if (event.keyCode === 39) {
            setScreen({active:!screen.active,transform:"rotateY(180deg)"})
        }
        else if (event.keyCode === 37) {
            setScreen({active:!screen.active,transform:"rotateY(0deg)"})
        }


        else if (event.keyCode === 38) {
            setScreen({active:!screen.active,transform:"rotateX(180deg)"})
        }
        else if (event.keyCode === 40) {
            setScreen({active:!screen.active,transform:"rotateX(0deg)"})
        }

    }

    const screenMove = () => {
        document.addEventListener('keydown', keypressed)
    }

    useEffect(() => {
        screenMove()
    }, [])

    return (
        <div style={{ paddingTop: "20px"}} className='flip-box'>
            <div className='flip-box-inner' style={{transform: !screen.active ? "" : screen.transform}}>
                <div className={"flip-box-front"}>
                    <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' alt='save plants' />
                </div>
                <div className={"flip-box-back"}>
                    <img src='https://thumbs.dreamstime.com/b/hand-holding-glass-globe-ball-tree-growing-green-nature-blur-background-eco-concept-161081206.jpg' alt='plant' />
                </div>
            </div>

            </div>
            )
        }
        
        export default FlipImageWithArrowKey
        
        // <button onClick={()=>setScreen(!screen)}>Flip</button>
