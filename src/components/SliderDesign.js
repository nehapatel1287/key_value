import React, { useEffect, useState } from 'react'
import './style.css/SliderDesign.css'
import image1 from './image/Camel.jpg';
import image2 from './image/Deer.jpg';
import image3 from './image/Elephant.jpg';
import image4 from './image/Fox.jpg';
import image5 from './image/Giraffe.jpg';
import image6 from './image/Horse.jpg';
import image7 from './image/kangaroo.jpg';
import image8 from './image/Loin.jpg';
import image9 from './image/Owl.jpg';
import image10 from './image/Rino.jpg';
import image11 from './image/Seep.jpg';
import image12 from './image/Tiger.jpg';





const SliderDesign = () => { 


    
    const [selectedImage, setSelectedImage] = useState(0)

    const [allImage,setAllImage]=useState([image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12])



   

    useEffect(() => {
        // screenMove()
        setInterval(() => {
            setSelectedImage(selectedImage=>selectedImage<allImage.length-1?selectedImage+1:0)
        }, 5000);
    }, [])

   

   



    return (
    
        
        <div>         
              <img  height={600} src={allImage[selectedImage]} alt=""/>      
              
                <div className="buttons-container">
                    <button id="previous" 
                    onClick={()=>{if (selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                    }}
                    >Previous<i class="fa fa-arrow-left"></i></button>
                    <button id="next" 
                    onClick={()=>{if (selectedImage < allImage.length - 1)
                        setSelectedImage(selectedImage + 1)
                    }}
                    >Next<i class="fa fa-arrow-right"></i></button>
                </div>
            
        </div>
    
        
    )
}

export default SliderDesign