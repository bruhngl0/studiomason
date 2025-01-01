import React from 'react'
import AnimatedServices from './AnimateServices'
import ScrollPower from './ScrollPower'
import "../styles/about.scss"
import "../styles/scrollpower.scss"
import RevealOnScroll from './RevealOnScroll'


const About = () => {
  return (
    <div className='about-main'>
      <div className='about-one'>
       
       <img src = "logo2.png" className='logo' />

      <div className='about-menu'>
        <ul>
          <li>CONCRETE/FURNITURE DESIGN</li>
          <li>DURABLE OUTDOOR SOLUTIONS</li>
          <li>SUSTAINABLE PRODUCTION</li>
          <li>BESPOKE CONCRETE DECOR</li>
       
        </ul>
      </div>

      <div className='about-reach'>
          <ul>
            <li>FURNITURE</li>
            <li>PLANTER'S</li>
            <li>WALL PANNEL</li>
          </ul>
      </div>
      </div>
       <div className='about-two'>
        <AnimatedServices />
       </div>

       <div className='about-three'>
        <ScrollPower />
       </div>

       

      
    </div>
  )
}

export default About
