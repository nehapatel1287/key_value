import React, { useEffect, useState } from 'react'
import './../App'

const CountRepetedWord = () => {
    const [capture, setCapture] = useState('')
    // const [count,setcount] =useState(0)
    const str = capture.length===0 ? [] : capture?.trim()?.split(" ");
    // console.log(str,"....",count);

    // const charCount = (str) =>{
        
        
    //     for(let i=0;i<str.length;i++){
    //         let j;
    //         for( j=0;j<i;j++){
    //             if(str[i]===str[j]){
    //                 setcount(count+1)
                    
    //             }
    //         }
            
    //     }

    //    return str
        
    // }
    const charCount = (str) =>{
        const wordObj={}
        console.log(str);
        if(str?.length===0 || !str) return {};
        for(let word of str){
            if(!wordObj[word]){
                word.trim()
                wordObj[word]=1
            }else{
                word.trim()
                wordObj[word]++
            }
        }
        return wordObj
    }
        // return wordObj
    
    console.log(charCount(str));
    // const charCount=(str) =>{
    //     // let words = sentence.split(" ");
    //     let wordMap = {};
      
    //     for (let i = 0; i < str.length; i++) {
    //       let currentWordCount = wordMap[str[i]];
    //       console.log(currentWordCount,wordMap[str[i]]);
    //       let count = currentWordCount ? currentWordCount : 0;
    //       wordMap[str[i]] = count + 1;
    //     }
    //     return wordMap;
    //   }

   
    // const charCount = (str) => {
    //     var obj = {};
    //     var k
       
    //     if (str.length > 0) {
    //         str.forEach(element => {
    //             if(obj.indexOf(element)==-1){
    //                 obj[k]=element;
    //                 // setcount(count+1) 
                    
    //             }
    //             else{
    //                 setcount(count+1)
    //             }
    //         });
            // for (let i = 0; i < str?.length; i++) {

            //     if (obj[str[i]]) {
            //         console.log("....///", obj[str[i]]);
            //         obj[str[i]] += obj[str[i]];
            //         console.log("....", obj[str[i]]);
            //     }
            //     else {
            //         obj[str[i]] = 1;
            //         console.log("....>>>",obj[str[i]]);
            //     }

            // }
    //     }
    //     return obj;

    // }

    // let checkValid = charCount(str)
    // let createFlat= Object.entries(checkValid);
    // var d=createFlat.flat(1);
    // console.log(d,'dd');
    // // eslint-disable-next-line no-labels
    // let arrayValue = createFlat.map((data)=>{
    //     return{key:data}
    // })
    // let arrayKey = Object.values(checkValid).map((data) => {
    //     return { value: data }
    // })

    // console.log(checkValid);
    // console.log(arrayKey);


    return (
        <div style={{ backgroundColor: 'GrayText', color: 'white' }}>
            <input type='text' placeholder='Enter text here' onChange={e => setCapture(e.target.value)} />

            <div style={{ disply: "flex", justifyContent: 'center', alignItems: 'center', padding: "2px" }}>
                <table >

                    <tr>
                        <th>Number of words</th>
                        <th>Word count</th>
                        <th>word</th>
                    </tr>
                    {/* {(str.length > 0) ? (str.map((data) => {
                        return (
                            <tr>
                                <td>{data.Object}</td>
                                <td></td>
                                <td>{data}</td>
                            </tr>
                        );
                    })) : null}*/}

                    {
                        str && Object.keys(charCount(str)).map((key, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{charCount(str)[key]}</td>
                                        <td>{key}</td>
                                    </tr>
                                </>
                            )
                        })
                    }


                </table>
            </div>
        </div>
    )
}

export default CountRepetedWord