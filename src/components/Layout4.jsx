

import React, { useEffect, useState } from 'react';
import '../styles/layout4.scss';

const Layout4 = () => {
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
    }, isPaused ? 1000 : 2000); // Pause for 1 second, slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="layout-four">
      <div className={`image-container-four image-four-${currentImageIndex}`}>
        <img src="pot10.png" alt="frame1" />
        <img src="pot11.png" alt="frame2" />
        <img src="pot12.png" alt="frame3" />
      </div>
    </div>
  );
};

export default Layout4;