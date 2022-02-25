import React from "react";
import PropTypes from "prop-types";
import { useInViewEffect } from "react-hook-inview";

const VideoFormat = ({ children, source, position }) => {
  const videoRef = React.useRef(null);

  const [isVisible, setVisible] = React.useState(false);

  const ref = useInViewEffect(
    ([entry]) => {
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
VideoFormat.propTypes = {
  children: PropTypes.elementType.isRequired,
  source: PropTypes.string,
  position: PropTypes.string,
};

VideoFormat.defaultProps = {
  source: "",
  position: "left",
};

export default VideoFormat;
