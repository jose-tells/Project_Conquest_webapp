import React from "react";
import PropTypes from "prop-types";
import { useInViewEffect } from "react-hook-inview";
// Styles
import "@styles/components/VideoFormat.styl";

const VideoFormat = ({ children, source, position }) => {
  const videoRef = React.useRef(null);

  const [isVisible, setVisible] = React.useState(false);

  const ref = useInViewEffect(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  const toggleVideo = (event) => {
    isVisible && videoRef.current.play();
    !isVisible && !!event && videoRef.current.pause();
  };

  React.useEffect(() => {
    toggleVideo();
  }, [isVisible]);

  return (
    <div ref={ref} className={`video__container ${position}`}>
      <div>
        <video
          onPlay={toggleVideo}
          className="video__item"
          ref={videoRef}
          muted
          loop
          src={source}
          type="video/mp4"
          playsInline
        />
      </div>
      {children}
    </div>
  );
};
VideoFormat.propTypes = {
  source: PropTypes.string,
  position: PropTypes.string,
};

VideoFormat.defaultProps = {
  source: "",
  position: "left",
};

export default VideoFormat;
