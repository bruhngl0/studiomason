import React, { useState, useEffect, memo, useCallback } from 'react';
import '../styles/screenvideo.scss';
import Header from './Header';

// Constants
const MOBILE_BREAKPOINT = 768;
const VIDEO_SOURCES = {
  mobile: '/mobile_final_video.mp4',  // Add forward slash for absolute path
  desktop: '/final_video.mp4'
};

// Add preload component
const VideoPreloader = memo(() => {
  return (
    <>
      <link rel="preload" as="video" href={VIDEO_SOURCES.desktop} type="video/mp4" />
      <link rel="preload" as="video" href={VIDEO_SOURCES.mobile} type="video/mp4" />
    </>
  );
});

// Update Video component with loading optimization
const Video = memo(({ src }) => (
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-bg-screen"
    preload="auto"
    loading="eager"
    fetchPriority="high"
    aria-hidden="true"
  >
    <source 
      src={src} 
      type="video/mp4"
      media={src.includes('mobile') ? '(max-width: 768px)' : ''} 
    />
    <track kind="captions" />
  </video>
));

const ScreenVideo = () => {
  const [videoSrc, setVideoSrc] = useState(VIDEO_SOURCES.desktop);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const newSrc = window.innerWidth <= MOBILE_BREAKPOINT 
      ? VIDEO_SOURCES.mobile 
      : VIDEO_SOURCES.desktop;
    
    setVideoSrc(prevSrc => {
      if (prevSrc !== newSrc) {
        return newSrc;
      }
      return prevSrc;
    });
  }, []);

  // Set up resize listener
  useEffect(() => {
    // Initial check
    handleResize();

    // Debounced resize handler
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  useEffect(() => {
    // Preload videos
    const preloadVideos = async () => {
      const videos = Object.values(VIDEO_SOURCES);
      await Promise.all(
        videos.map(src => {
          return new Promise((resolve) => {
            const video = document.createElement('video');
            video.src = src;
            video.preload = 'auto';
            video.onloadeddata = () => resolve();
            video.onerror = () => resolve(); // Handle errors gracefully
          });
        })
      );
      setIsLoading(false);
    };

    preloadVideos();
  }, []);

  return (
    <>
      <VideoPreloader />
      <Header />
      <div className="video-container-screen">
        {isLoading ? (
          <div className="video-loading">Loading...</div>
        ) : (
          <Video src={videoSrc} />
        )}
    
      </div>
    </>
  );
};

// Add this to your SCSS file



export default memo(ScreenVideo);
