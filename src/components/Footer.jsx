import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa'
import { FaLocationArrow } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa6';


import "../styles/footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='one'>
        <h1>DISCOVER PRODUCTS</h1>
        <ul>
          <li><a href='https://shop.shinesilver.store/collections/pendant-sets'>Furniture</a></li>
          <li><a href="https://shop.shinesilver.store/collections/necklace-sets">Planters</a></li>
          <li><a href="https://shop.shinesilver.store/collections/necklace-sets">Wall Pannels</a></li>
        </ul>
      </div>

      <div className='two'>
        <h1>OUR COMPANY</h1>
        <ul>
          <li><a href="#abo">About Us</a></li>
        </ul>
      </div>

      <div className='three'>
        <h1>CUSTOMER CARE</h1>
        <ul>
       
          <li><a href="https://shop.shinesilver.store/policies/shipping-policy">Shipping Policy</a></li>
          <li><a href="https://shop.shinesilver.store/policies/terms-of-service">Privacy Policy</a></li>
          <li><a href="https://shop.shinesilver.store/policies/refund-policy">Returns & Exchange</a></li>
         
          <li><a href="https://shop.shinesilver.store/policies/terms-of-service">Terms & Conditions</a></li>
          <li><a href="https://wa.me/918550022888">Bulk Order</a></li>
        </ul>
      </div>

      <div className='four'>
        <h1>CONTACT US</h1>
        
        <div className='phone'>
        <FaPhoneAlt />
        <span> <a href= "https://wa.me/918550022888">+91 9167563398 </a></span>
        </div>

        <div className='mail'>
       <MdMailOutline />
       <span>
        <a href = "mailto:support@shinesilver.store">info@studiomason.in</a>
       </span>
      </div>

        <div className='location'>
        <FaLocationArrow />
        <span>
          <a href="geo:12.9716,77.5946?q=Vijay Nagar, Bangalore 560040">Bangalore, 560040</a>
        </span>
      </div>

     

      <div className='socialmedia'>
        <a href='https://www.instagram.com/shinesilver_925?igsh=YTZqNGg3ZHY5cWZ2'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaInstagram />
        </a>

        <a href='https://wa.me/918550022888'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaWhatsapp />
        </a>

        <a href='https://x.com/shinesilver_925?s=11'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaSquareXTwitter /> 
        </a>

        <a href='https://www.facebook.com/profile.php?id=61555017549608'> {/* Replace 'https://www.instagram.com/' with your Instagram URL */}
          <FaFacebook  className='icons'/> 
        </a>
      </div>
      </div>


    </div>
  );
};

export default Footer;
