import React from 'react'
import hexathic from "../../logos/Hexatick.png"


export default function Navbar() {
  return (
    <div>
        <div id="navbar">
           <img src="https://s3-alpha-sig.figma.com/img/a42b/304e/6fe3cda4c4c7bf888d55949ec9052a5e?Expires=1678060800&Signature=o1GsZvmvdHZSAPzg3ptw5KLosy9XP5oMU11M2yU-kjYc2~6WwiVNDvikx6j636csGGI93bWX1~qYpYsZwmZ-c2bhp0Ca~xkPo1UsqcGr4-q9GVkHB8oFdQ52AOWiz~Qn3VgSeBkTePnxan-Yl6V~u5NeEDvg7lrVDaD7cwtFKtT7YBMDJf6B4PV2b8ZPo3kQGBcm16YzRFB7kXDy1e9xWZe80cYzxwITkI-nz-WRF9tb52MzE80BA~ICL7bxTrNcEq0Jn7M7bYyi7sVxWFUgAfjkFJ2buYGGbR3buHzXefpyfxUoxN1KC6xa5RXkZb~HL2B2DQt3oLpgUAXz~Jj7JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='logoImage'></img><img src={hexathic} className="logotext"/>
            <div className='navchild2'><div className='navchild2_1' >Case studing</div> <div className='navchild2_2'>Api Documentation</div ><div className='navchild2_3'>Pricing</div></div>
           <div className='navchild3_1'><p>Contact Sales</p></div><div className='navchild3_2'><p>Sign up</p></div>
        </div>
        </div>
  )
}
