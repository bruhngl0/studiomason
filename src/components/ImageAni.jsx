
import React from 'react'
import "../styles/imageani.scss"
import { Link } from 'react-router-dom'
import AnimatedButton from './AnimatedButton'

const ImageAni = () => {
  return (
    <div className= "imageani-main">
        <div className='imageani-heading'>
            <h2> MADE BY <br/>STUDIO MASON, <br/> CREATED WITH LOVE</h2>
        </div>

        <div className='imageani-para'>
            <p> Studio Mason products are made using high-performance concrete, Steel, Wood, Resin and
            Fibreglass . <br/> <br/> Our materials offer strength, weather resistance, and a natural aesthetic appeal. Each
              piece is handcrafted and finished with attention to detail, ensuring uniqueness and longevity.
          </p>
        </div>

        <div className='imageani-btn' >
          <Link to = "/screensix" className='imageani-explore'>
            <AnimatedButton text= "EXPLORE"/>
            </Link>
        </div>
      
    </div>
  )
}

export default ImageAni
