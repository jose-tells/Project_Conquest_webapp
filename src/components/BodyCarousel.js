import React from "react";
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

export default BodyCarousel;
