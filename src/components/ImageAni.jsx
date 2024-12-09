
import React from 'react'
import "../styles/imageani.scss"
import { Link } from 'react-router-dom'

const ImageAni = () => {
  return (
    <div className= "imageani-main">
        <div className='imageani-heading'>
            <h2> <span className='italic'>MADE BY<br/></span>STUDIO MASON,<br/><span className='italic'>CREATED WITH</span> LOVE</h2>
        </div>

        <div className='imageani-para'>
            <p> Studio Mason products are made using high-performance concrete, Steel, Wood, Resin and
            Fibreglass . <br/> <br/> Our materials offer strength, weather resistance, and a natural aesthetic appeal. Each
              piece is handcrafted and finished with attention to detail, ensuring uniqueness and longevity.
          </p>
        </div>

        <div >
          <Link to = "/screensix">
            <button className='imageani-explore'>EXPLORE</button>
            </Link>
        </div>
      
    </div>
  )
}

export default ImageAni
