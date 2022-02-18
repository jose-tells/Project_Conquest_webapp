import React from "react";
import { useInViewEffect } from "react-hook-inview";

const VideoFormat = ({ children, source, position }) => {
  const videoRef = React.useRef(null);

  const [isVisible, setVisible] = React.useState(false);

  const ref = useInViewEffect(
    ([entry], observer) => {
      setVisible(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  const toggleVideo = () => {
    isVisible ? videoRef.current.play() : videoRef.current.pause();
  };

  React.useEffect(() => {
    toggleVideo();
  }, [isVisible]);

  return (
    <div ref={ref} className={`video__container ${position}`}>
      <div>
        <video
          className="video__item"
          ref={videoRef}
          muted
          loop
          src={source}
          controls
          type="video/mp4"
        />
      </div>
      {children}
    </div>
  );
};

export default VideoFormat;
