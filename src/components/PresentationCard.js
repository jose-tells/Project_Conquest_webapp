import React from "react";
import { Link } from "react-router-dom";
// FontAwesome
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="PresentationCard__link--container">
        <Link className="PresentationCard__link" to="/contact">
          About Us
          <FontAwesomeIcon
            icon={faArrowRight}
            className="Presentation__link--icon"
          />
        </Link>
        <div className="PresentationCard__link--underline" />
      </div>
    </div>
  </div>
);

export default PresentationCard;
