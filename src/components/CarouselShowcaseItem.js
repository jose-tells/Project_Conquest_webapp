import React from "react";
// Styles
import "@styles/components/CarouselShowcaseItem.styl";

const CarouselShowcaseItem = ({ mediaIndex, index, setMediaIndex, media }) => (
  <div
    className={`sliderReel__showcaseImage--container ${
      index === mediaIndex ? "selected" : ""
    }`}
    onClick={() => setMediaIndex(index)}
  >
    <img src={media} alt="" />
  </div>
);

export default CarouselShowcaseItem;
