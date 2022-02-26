import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/CarouselShowcase.styl";

const CarouselShowcase = ({ children, carouselStyles }) => (
  <section className="sliderReel__showcase--container">
    <div className="sliderReel__showcase" style={carouselStyles()}>
      {children}
    </div>
  </section>
);

CarouselShowcase.propTypes = {
  carouselStyles: PropTypes.func,
};

CarouselShowcase.defaultProps = {
  carouselStyles: () => ({ transform: "translateX(50%)" }),
};

export default CarouselShowcase;
