import React, { useState, useEffect, memo, useCallback, useRef } from 'react';
import '../styles/screenvideo.scss';
import Header from './Header';
import thumbnail from "../../public/thumbnail.jpeg";

// Constants
const MOBILE_BREAKPOINT = 768;
const VIDEO_SOURCES = {
  mobile: 'mobile_final_video.mp4',
  desktop: 'final_video.mp4'
};

const ScreenVideo = () => {
  const [videoSrc, setVideoSrc] = useState(VIDEO_SOURCES.desktop);
  const [isThumbnailVisible, setIsThumbnailVisible] = useState(true);
  const videoRef = useRef(null);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    setVideoSrc(isMobile ? VIDEO_SOURCES.mobile : VIDEO_SOURCES.desktop);
  }, []);

  // Set up resize listener
  useEffect(() => {
    handleResize();

    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  // Hide thumbnail smoothly when the first frame appears
  const handleFirstFrame = () => {
    setTimeout(() => {
      setIsThumbnailVisible(false);
    }, 300); // Allow slight delay for smooth transition
  };

  return (
    <>
      <Header />
      <div className="video-container-screen">
        {/* Thumbnail Background */}
        {isThumbnailVisible && (
          <img src={thumbnail} alt="Video thumbnail" className={`thumbnail ${isThumbnailVisible ? "fade-out" : ""}`} />
        )}

        {/* Video Player */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="video-bg-screen"
          preload="auto"
          aria-hidden="true"
          onPlaying={handleFirstFrame} // Trigger smooth fade when video starts playing
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default memo(ScreenVideo);
