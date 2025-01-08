

import React, { useEffect, useState } from 'react';
import '../styles/layout3.scss';

const Layout3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate through 3 images
        setIsPaused(true); // Pause after moving to the next image
      } else {
        setIsPaused(false); // Resume after the pause
      }
    }, isPaused ? 1500 : 2000); // Pause for 1 second, slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-three">
      <div className={`image-container-three image-${currentImageIndex}`} style={{
          transform: `translateX(-${currentImageIndex * 400}px)`, // Dynamically update position
          transition: 'transform 1s ease-in-out', // Smooth transition
        }} >
        <img src="image_7.jpg" alt="frame1" />
        <img src="image_8.jpg" alt="frame2" />
        <img src="image_9.jpg" alt="frame3" />
      </div>
    </div>
  );
};

export default Layout3;