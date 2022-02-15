import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../assets/styles/components/GridFormat.styl";

const GridFormat = ({ id, media, orientation }) => (
  <Link to={`/carousel/${id}`} className={`gridItem ${orientation}`}>
    <img src={media} alt="" />
  </Link>
);

export default GridFormat;
