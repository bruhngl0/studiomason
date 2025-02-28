import React, { useState, useEffect, memo } from 'react';
import '../styles/screenvideo.scss';
import Header from './Header';

// Constants
const MOBILE_BREAKPOINT = 768;
const VIMEO_VIDEOS = {
  mobile: '1061208135',  // Same video ID for mobile (or change if needed)
  desktop: '1061199853'  // Your public video ID
};

// Load Vimeo API script once
const loadVimeoScript = () => {
  if (!document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    document.body.appendChild(script);
  }
};

// Memoized Vimeo video component
const VimeoVideo = memo(({ videoId }) => {
  // Uses the format for public videos with background parameters
  const videoSrc = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&app_id=58479`;
  
  // Load Vimeo script on component mount
  useEffect(() => {
    loadVimeoScript();
  }, []);
  
  return (
    <div className="video-container-inner" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Background Video"
        aria-hidden="true"
      ></iframe>
    </div>
  );
});

// Memoized overlay components
const Overlay = memo(() => (
  <>
    <div className="overlay-text-screen" />
    <div className="overlay-text-screen-one" />
  </>
));

const ScreenVideo = () => {
  const [videoId, setVideoId] = useState(VIMEO_VIDEOS.desktop);

  // Set up responsive video switching
  useEffect(() => {
    const handleResize = () => {
      const newVideoId = window.innerWidth <= MOBILE_BREAKPOINT 
        ? VIMEO_VIDEOS.mobile 
        : VIMEO_VIDEOS.desktop;
      
      setVideoId(newVideoId);
    };

    // Initial check
    handleResize();
    
    // Add event listener with throttling
    let resizeTimer;
    const throttledResize = () => {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleResize();
        }, 200);
      }
    };

    window.addEventListener('resize', throttledResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="video-container-screen">
        <VimeoVideo videoId={videoId} />
        <Overlay />
      </div>
    </>
  );
};

export default memo(ScreenVideo);