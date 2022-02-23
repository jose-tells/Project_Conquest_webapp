import React from "react";
import "../assets/styles/components/PresentationCardImage.styl";

const PresentationCardImage = ({ media, caption }) => (
  <div className="PresentationCard__image--container">
    <img className="PresentationCard__image" src={media} alt={caption} />
  </div>
);

export default PresentationCardImage;
