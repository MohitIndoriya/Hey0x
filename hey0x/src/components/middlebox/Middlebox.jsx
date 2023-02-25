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

export default function Middlebox() {
  return (
    <div id="container">
        <div className='firstdiv' ><p>NFT Life-Cycle Management Platform</p></div>
        <div className='seconddiv'><p>Use NFT-Driven Customer Engagement - at scale</p></div>
        <div className='thirdchild'><p>Leverage NFTs to transform customer engagement and establish a powerful community-driven brand presence with Hexatick's comprehensive NFT management solution.</p></div>
        <div className='fourthchild'><p>Try for free</p></div>
        <div className='fifthchild'><p>No credit card needed</p></div>
        <div className='sixthchild'><p>Request Demo</p></div>
        <marquee className="seventhchild" behavior="scroll" direction="up">
    <img src={pic1} style={{width:"218px",height:"211px"}} />
    <img src={pic2}   style={{width:"218px",height:"211px"}} />
    <img src={pic3}   style={{width:"218px",height:"211px"}} />
    <img src={pic4}   style={{width:"218px",height:"211px"}} />
    <img src={pic5}   style={{width:"218px",height:"211px"}} />
    <img src={pic6}   style={{width:"218px",height:"211px"}} />
  </marquee>
  <marquee className="eightchild" behavior="scroll" direction="down">
    <img src={pic7} style={{width:"218px",height:"211px"}} />
    <img src={pic8}   style={{width:"218px",height:"211px"}} />
    <img src={pic9}   style={{width:"218px",height:"211px"}} />
    <img src={pic10}   style={{width:"218px",height:"211px"}} />
    <img src={pic11}   style={{width:"218px",height:"211px"}} />
    <img src={pic12}   style={{width:"218px",height:"211px"}} />
  </marquee>
    </div>
  )
}

