import React from "react";
// Components
import RedirectLink from "./RedirectLink";
// Styles
import "../assets/styles/components/PresentationCard.styl";

const PresentationCard = () => (
  <div className="PresentationCard__container">
    <img className="PresentationCard__image" src="" alt="" />
    <div className="PresentationCard__text--container">
      <h1 className="PresentationCard__text">
        HI I AM JOSE!
        <br />
        <span>PROJECT CONQUEST</span>
        <br />
        WEBPAGE CREATOR BUT,
        <br />
        THERE ARE TWO MORE
        <br />
        ARTIST WITH ME
        <br />
        CREATING MORE CREATIVE STUFF!
      </h1>
      <RedirectLink link="contact" linkText="About us" />
    </div>
  </div>
);

export default PresentationCard;
