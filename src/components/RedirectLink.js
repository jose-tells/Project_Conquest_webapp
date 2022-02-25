import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// FontAwesome
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import "@styles/components/RedirectLink.styl";

const RedirectLink = ({ link, linkText }) => (
  <div className="RedirectLink__container">
    <Link className="RedirectLink__text" to={`/${link}`}>
      {linkText}
      <FontAwesomeIcon icon={faArrowRight} className="RedirectLink__icon" />
    </Link>
    <div className="RedirectLink__underline" />
  </div>
);

RedirectLink.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string,
};

RedirectLink.defaultProps = {
  link: "",
  linkText: "Home",
};

export default RedirectLink;
