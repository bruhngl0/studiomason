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
      <div className='about-logo'>
         <span>❉</span>
      </div>

      <div className='about-menu'>
        <ul>
          <li>Concrete/Furniture Design</li>
          <li>Durable Outdoor Solutions</li>
          <li>Sustainable Production</li>
          <li>Bespoke Concrete Decor</li>
          <li>Modern Interiors</li>
        </ul>
      </div>

      <div className='about-reach'>
          <ul>
            <li>FURNITURE</li>
            <li>PLANTER'S</li>
            <li>WALL PANNEL'</li>
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
