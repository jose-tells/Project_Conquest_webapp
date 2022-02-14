import React from "react";
// Styles
import "../assets/styles/components/LinkCard.styl";

const LinkCard = ({ cardTitle, children }) => (
  <div className="linkCard__container">
    <div className="linkCard__image--container">
      <img className="linkCard__image" src="" alt="" />
      <h1 className="linkCard__title">{cardTitle}</h1>
    </div>
    {children}
  </div>
);

export default LinkCard;
