
import React, { useEffect, useRef, useState } from 'react'
import pic2 from ".././../photos/Group34.png"
import pic3 from ".././../photos/Group35.png"
import pic4 from ".././../photos/Group27.png"
import pic7 from ".././../photos/Group10.png"
import pic6 from ".././../photos/Group23.png"
import pic5 from ".././../photos/Group24.png"
import pic8 from ".././../photos/Group28.png"
import pic9 from ".././../photos/Group38.png"
import pic10 from ".././../photos/Group39.png"
import pic11 from ".././../photos/Group41.png"
import pic1 from ".././../photos/Group42.png"
import pic12 from ".././../photos/Group31.png"
let arr=[{
  Name: "Digital Twin",
  src: pic7

},{
  Name: "Gamming Asset",
  src: pic2

},{
  Name: "Proof Of Attendence",
  src: pic9

},{
  Name: "Tournament Win",
  src: pic11

},{
  Name: "Cirtificates",
  src: pic8

}]

function Carousel1() {
  let [index,setindex]=useState(0)
  let id=useRef(null)
  function handel(index){
   setindex((pre)=>pre+1)
  }
  if(index>=4){
    setindex(0)
  }
  console.log(index,"out")
  useEffect(()=>{
   id=setInterval(()=>{
      handel(index)
    },2000)
    
    return(()=>clearInterval(id))
  },[])

  return (
    

  <div>
<h1 className='fadein'>{arr[index].Name}</h1>
<img className='fadein1' src={arr[index].src} /> 

  </div>

     
      
     
      
    
  );
}

export default Carousel1 ;