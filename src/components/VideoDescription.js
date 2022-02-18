/* eslint-disable no-unused-vars */
import React from "react";

const VideoDescription = ({ title, caption, author, position }) => (
  <div className={`description ${position}`}>
    <h2 className="description--title">{title}</h2>
    <p className="description--caption">{caption}</p>
    <p className="description--author">{author}</p>
  </div>
);

export default VideoDescription;
