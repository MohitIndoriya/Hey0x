import logo1 from "../../logos/intercom.png"
import logo2 from "../../logos/marvel.png"
import logo3 from "../../logos/notion.png"
import logo4 from "../../logos/shazam.png"
import logo5 from "../../logos/treehouse.png"
import logo6 from "../../logos/zapier.png"
import hexatic from "../../logos/Group165.png"
import girl from "../../logos/girl.png"
import React from 'react'
import Carousel1 from "../Crausel/Crousel"

export default function Bottombox() {
  return (
    <div id="BottomContainer">
        <div className='bottomchild_1'></div><div className='bc1_1'><p>Trusted by over 100+ businesses worldwide!</p></div>
        
        <div className='bc1_2'><div><img src={logo1}/> </div><div><img src={logo2}/></div><div><img src={logo3}/></div><div><img src={logo4}/></div><div><img src={logo5}/></div><div><img src={logo6}/></div></div>
        <div className="bottomchild_2"><div><img src={hexatic}/></div></div>
        <div className="bottomchild_3"></div>
        <div className="bc3_1"><span>How do NFTs help in branding? </span></div>
        <div className="bottomchild_4"><img src={girl}/></div>
        <div className="bottomchild_5"></div><p className="bc5_1">Play Video</p>
        <div  className="carouseldiv"><Carousel1/></div>
        <div></div>
    </div>
  )
}
