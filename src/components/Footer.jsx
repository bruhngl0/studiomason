import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import "../styles/footer.scss"



const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-one'>
     
      </div>
     <div className='footer-two'>
        <div className='footer-two-one'>
        <h1>STUDIO MASON</h1>
        <div className='footer-two-one-two'>
        <p>@STUDIO MASON</p>
        <p>25/26 BMT COMPLEX 560025</p>
        <p>BANGALORE, INDIA</p>
        </div>

        <p className='footer-followus'>FOLLOW US</p>
        <div className='footer-follow-us'>
         <FaFacebookSquare  size = {30}className='footer-facebook'/>  
         <FaSquareInstagram  size = {30}className='footer-instagram'/>   
        </div>
        </div>

        <div className='footer-two-two'>
            
         <p style = {{paddingTop: "1.5rem"}}>01/ MASON</p>
         <p style = {{paddingTop: "1.5rem"}}>ABOUT STUDIO MASON</p>
     
         <p style = {{paddingTop: "2px"}}>CONTACT</p>
         <p style = {{paddingTop: "2px"}}>BECOME A DEALER</p>
         <p style = {{paddingTop: "2px"}}> SHOP</p>

        </div>

        <div className='footer-two-three'>
        <p  style = {{paddingTop: "1.5rem"}}>02/ CUSTOMER SERVICE</p>
         <p style = {{paddingTop: "1.5rem"}}>FAQ</p>
         <p style = {{paddingTop: "2px"}}>DELIVERY</p>
         <p style = {{paddingTop: "2px"}}>RETURN</p>
         <p style = {{paddingTop: "2px"}}>SIZE GUIDE</p>
         <p style = {{paddingTop: "2px"}}>MY ACCOUNT</p>
         <p style = {{paddingTop: "2px"}}>TERMA OF TRADE</p>
         <p style = {{paddingTop: "2px"}}>PRIVACY POLICY</p>
         <p style = {{paddingTop: "2px"}}>COOKIES</p>
        </div>

        <div className='footer-two-four'>
        <p style = {{paddingTop: "1.5rem"}}>03/ POPULAR NOW</p>
         <p style = {{paddingTop: "1.5rem"}}>FLEECE</p>
         <p style = {{paddingTop: "2px"}}>OUTDOOR</p>
         <p style = {{paddingTop: "2px"}}>ESSENTIALS</p>
         <p style = {{paddingTop: "2px"}}>UNNSSRY X BAW</p>
        </div>

        <div className='footer-two-five'>
          <h1>REACH OUT SAVE 10% ON <br/> EVERYTHING NEW</h1>
          <input type='email' placeholder='EMAIL ADDRESS'></input>
          <button>submit</button>
        </div>

     </div>

    </div>
  )
}

export default Footer
