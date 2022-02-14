import React from "react";
import { Link } from "react-router-dom";
// FontAwesome
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import "../assets/styles/components/RedirectLink.styl";

const RedirectLink = ({ link, linkText }) => (
  <div className="RedirectLink__container">
    <Link className="RedirectLink__text" to={`/${link}`}>
      {linkText}
      <FontAwesomeIcon icon={faArrowRight} className="RedirectLink__icon" />
    </Link>
    <div className="RedirectLink__underline" />
  </div>
);

export default RedirectLink;
