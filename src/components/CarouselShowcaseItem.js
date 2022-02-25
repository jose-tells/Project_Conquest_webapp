import React from "react";
import PropTypes from "prop-types";
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

CarouselShowcaseItem.propTypes = {
  mediaIndex: PropTypes.number,
  index: PropTypes.number,
  setMediaIndex: PropTypes.func,
  media: PropTypes.string,
};

CarouselShowcaseItem.defaultProps = {
  mediaIndex: 0,
  index: 0,
  setMediaIndex: () => {},
  media: "",
};

export default CarouselShowcaseItem;
