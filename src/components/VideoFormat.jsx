import React from "react";
import { useInViewEffect } from "react-hook-inview";
import { Link } from "react-router-dom";

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
      <Link to="/player">
        <video className="video__item" ref={videoRef} muted loop>
          <source src={source} type="video/mp4" />
        </video>
      </Link>
      {children}
    </div>
  );
};

export default VideoFormat;
