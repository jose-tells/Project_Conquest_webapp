import React from "react";
import PropTypes from "prop-types";
// Components
import RedirectLink from "./RedirectLink";
// Styles
import "@styles/components/PresentationCard.styl";

const PresentationCard = ({ children }) => (
  <div className="PresentationCard__container">
    {children}
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
      <RedirectLink link="about" linkText="About us" />
    </div>
  </div>
);

PresentationCard.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PresentationCard;
