/* eslint-disable no-unused-vars */
import React from "react";

const VideoDescription = ({ title, caption, author, position }) => (
  <div className={`description ${position}`}>
    <h2 className="description--title">What a mess</h2>
    <p className="description--caption">A Music struggle</p>
    <p className="description--author">{author}</p>
  </div>
);

export default VideoDescription;
