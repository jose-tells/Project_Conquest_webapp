import React from "react";
import PropTypes from "prop-types";

const VideoDescription = ({ title, caption, author, position }) => (
  <div className={`description ${position}`}>
    <h2 className="description--title">{title}</h2>
    <p className="description--caption">{caption}</p>
    <p className="description--author">{author}</p>
  </div>
);

VideoDescription.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
  author: PropTypes.string,
  position: PropTypes.string,
};

VideoDescription.defaultProps = {
  title: "Hi!",
  caption: "Videos will be arriving soon!",
  author: "Jose Marquinez",
  position: "left",
};

export default VideoDescription;
