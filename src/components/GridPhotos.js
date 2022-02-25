import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/GridPhotos.styl";

const GridPhotos = ({ children }) => (
  <section className="gridPhotos">{children}</section>
);

GridPhotos.propTypes = {
  children: PropTypes.array.isRequired,
};

export default GridPhotos;
