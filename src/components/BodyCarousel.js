import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/BodyCarousel.styl";

const BodyCarousel = ({ handleLeft, handleRight, children }) => (
  <section className="sliderReel__slider">
    <div className="sliderReel__showcase--buttons left" onClick={handleLeft} />
    {children}
    <div
      className="sliderReel__showcase--buttons right"
      onClick={handleRight}
    />
  </section>
);

BodyCarousel.propTypes = {
  handleLeft: PropTypes.func,
  handleRight: PropTypes.func,
  children: PropTypes.element.isRequired,
};

BodyCarousel.defaultProps = {
  handleLeft: () => {},
  handleRight: () => {},
};

export default BodyCarousel;
