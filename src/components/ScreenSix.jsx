import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../public/rio_1.jpg"
import image2 from "../../public/rio_2.jpg"
import image3 from "../../public/rio_3.jpg"
import image4 from "../../public/rio_4.jpg"
import image5 from "../../public/5.jpg"
import image6 from "../../public/6.jpg"


import "../styles/screensix.scss"




const ScreenSix = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const items = [
      { image: image1, color: 'green', text: 'PLANTERS', content: '.', id: 1, route: '/test-comp' },
      { image: image2, color: 'red', text: 'DESK PLANTERS', content: '.', id: 2, route: '/test-comp2' },
      { image: image3, color: 'blue', text: 'TABLES', content: '.', id: 3, route: '/test-comp4' },
      { image: image4, color: 'gray', text: 'BREEZE BLOCKS', content: '.', id: 4, route: '/test-comp3' },
      { image: image5, color: 'yellow', text: 'WALL CLADDING', content: '.', id: 5, route: '/test-comp3' },
      { image: image6, color: 'navy', text: 'SCULPTURES', content: '.', id: 6, route: '/test-comp3' },
     
      
    ];

  return (
    
 
    <div>
      <div className="supreme-container">
      
        <div className="supreme-grid">
          {items.map((item, index) => (
            
              <div
                key = {item.id}
                className={`grid-item ${hoveredIndex === index ? 'hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
                style={{  backgroundImage: `url(${item.image})` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                   <Link key={item.id} to={item.route}>
                <span className="item-text" >{item.text}</span>
                <span className="item-new">New</span>
                <div className="item-content" style= {{ width: "500px", height: "500px"}}>{item.content}</div>
                </Link>
              </div>
          
          ))}
        </div>
       
         <Link to= "/">
         <button className='screen-six-btn'>back</button>
         </Link>
      </div>
    </div>

  );
};

export default ScreenSix;