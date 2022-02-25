import React from "react";
import PropTypes from "prop-types";
import "@styles/components/PresentationCardImage.styl";

const PresentationCardImage = ({ media, caption }) => (
  <div className="PresentationCard__image--container">
    <img className="PresentationCard__image" src={media} alt={caption} />
  </div>
);

PresentationCardImage.propTypes = {
  media: PropTypes.string,
  caption: PropTypes.string,
};

PresentationCardImage.defaultProps = {
  media: "",
  caption: "Photography section",
};

export default PresentationCardImage;
