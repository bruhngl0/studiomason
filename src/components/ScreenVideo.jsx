import React, { useState, useEffect, memo, useCallback } from 'react';
import '../styles/screenvideo.scss';
import Header from './Header';
import thumbnail from "../../public/thumbnail.jpeg"
// Constants
const MOBILE_BREAKPOINT = 768;
const VIDEO_SOURCES = {
  mobile: 'mobile_final_video.mp4',
  desktop: 'final_video.mp4'
};
const THUMBNAIL_SOURCES = {
  mobile: thumbnail,
  desktop: thumbnail
};

// Memoized video component
const Video = memo(({ src, onLoaded }) => (
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-bg-screen"
    preload="auto"
    aria-hidden="true"
    onCanPlayThrough={onLoaded} // Hide loader when video is ready
  >
    <source src={src} type="video/mp4" />
    <track kind="captions" />
  </video>
));

// Memoized overlay components
const Overlay = memo(() => (
  <>
    <div className="overlay-text-screen" />
    <div className="overlay-text-screen-one" />
  </>
));

const ScreenVideo = () => {
  const [videoSrc, setVideoSrc] = useState(VIDEO_SOURCES.desktop);
  const [thumbnailSrc, setThumbnailSrc] = useState(THUMBNAIL_SOURCES.desktop);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const newSrc = isMobile ? VIDEO_SOURCES.mobile : VIDEO_SOURCES.desktop;
    const newThumb = isMobile ? THUMBNAIL_SOURCES.mobile : THUMBNAIL_SOURCES.desktop;

    setVideoSrc(prevSrc => (prevSrc !== newSrc ? newSrc : prevSrc));
    setThumbnailSrc(prevThumb => (prevThumb !== newThumb ? newThumb : prevThumb));
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

  return (
    <>
      <Header />
      <div className="video-container-screen">
        {/* Thumbnail Placeholder */}
        {isLoading && (
          <div className="thumbnail-container">
            <img src={thumbnailSrc} alt="Video thumbnail" className="thumbnail" />
            <div className="loading-bar"></div>
          </div>
        )}

        {/* Video Player */}
        <Video src={videoSrc} onLoaded={() => setIsLoading(false)} />

        <Overlay />
      </div>
    </>
  );
};

export default memo(ScreenVideo);
