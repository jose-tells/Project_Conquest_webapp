import React from "react";
// Styles
import "../assets/styles/components/CarouselShowcase.styl";

const CarouselShowcaseItem = ({ mediaIndex, index, setMediaIndex, media }) => (
  <div
    className={`sliderReel__showcaseImage--container ${
      index === mediaIndex ? "selected" : ""
    }`}
    onClick={() => setMediaIndex(index)}
  >
    <img className="" src={media} alt="" />
  </div>
);

export default CarouselShowcaseItem;
