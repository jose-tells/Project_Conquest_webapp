import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/GridVideo.styl";

const GridVideos = ({ children }) => (
  <section className="gridVideo">{children}</section>
);

GridVideos.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default GridVideos;
