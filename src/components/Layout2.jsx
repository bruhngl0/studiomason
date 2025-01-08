
import React, { useEffect, useState } from 'react';
import '../styles/layout2.scss';

const Layout2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Rotate through 3 images
        setIsPaused(true); // Pause after moving to the next image
      } else {
        setIsPaused(false); // Resume after the pause
      }
    }, isPaused ? 900 : 2000); // Pause for 1 second, slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-two">
      <div className={`image-container-two image-${currentImageIndex}`} style={{
          transform: `translateX(-${currentImageIndex * 400}px)`, // Dynamically update position
          transition: 'transform 1s ease-in-out', // Smooth transition
        }}>
        <img src="image_4.jpg" alt="frame1" />
        <img src="image_5.jpg" alt="frame2" />
        <img src="image_6.jpg" alt="frame3" />
      </div>
    </div>
  );
};

export default Layout2;