import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
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


function Carousel1() {
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
  return (
    <Carousel>
      
     
      {arr.map((e)=>{
        return (
        <Carousel.Item interval={2000}>
             
        <img
          className="d-block w-100"
          src={e.src}
          alt="Second slide"
          style={{
            width: "128px",
            height: "128px",
            left: "223px",
           }}
        />
       <Carousel.Caption>
          <p style={{fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "500",
fontSize: "60px",
lineHeight:" 70px",

width: "461px",
height: "70px",
left: "223px",

color: "#3079F1" ,
}}>{e.Name}</p>
        
        </Carousel.Caption>
      </Carousel.Item>)
      })}
     
      
    </Carousel>
  );
}

export default Carousel1 ;