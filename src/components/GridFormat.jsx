import React from "react";
import { Link } from "react-router-dom";

const GridFormat = ({ media, id } ) => {
  return (
    <Link to={`/carousel/${id}`} className="gridItem">
      <img src={media} alt="" />
    </Link>
  );
};

export default GridFormat;
