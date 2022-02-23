import React from "react";
// Styles
import "@styles/components/CarouselShowcase.styl";

const CarouselShowcase = ({ children, carouselStyles }) => (
  <section className="sliderReel__showcase--container">
    <div className="sliderReel__showcase" style={carouselStyles()}>
      {children}
    </div>
  </section>
);

export default CarouselShowcase;
