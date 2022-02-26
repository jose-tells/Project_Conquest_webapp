import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/VideoFormat.styl";

const VideoFormat = ({ children, source, position }) => {
  const videoRef = React.useRef(null);

  const [isPlay, setPlay] = React.useState(false);

  const toggleVideo = () => {
    if (!isPlay) {
      videoRef.current
        .play()
        .then(() => setPlay(true))
        .catch(console.error);
    }
    if (isPlay) {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div className={`video__container ${position}`}>
      <div>
        <video
          onClick={toggleVideo}
          className="video__item"
          ref={videoRef}
          muted
          src={source}
          type="video/mp4"
          playsInline
          autoPlay
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
