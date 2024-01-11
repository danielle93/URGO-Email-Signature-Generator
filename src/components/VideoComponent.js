import React, { useEffect, useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video element exists before attempting to play
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, handle the error
        console.error("Autoplay failed:", error);
      });
    }
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      ref={videoRef}
      style={{
        objectFit: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <source
        src="https://player.vimeo.com/progressive_redirect/playback/879645676/rendition/1080p/file.mp4?loc=external&log_user=0&signature=fca4e50a31d8c74dedc0075169c63baff684c5e957fa9956a445d66bc8bf9e5d"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoComponent;
