import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "@styles/components/AboutFormat.styl";

const AboutFormat = ({ media, link, specialty, isLastItem }) => (
  <Link to={`/about/${link}`} className="gridAbout__item--container">
    {specialty &&
      specialty.map((item, index) => (
        <div
          key={item}
          className={`gridAbout__specialty--container ${
            isLastItem || index === 1 ? "right" : ""
          }`}
        >
          <h1 className="gridAbout__specialty">{item}</h1>
        </div>
      ))}
    <div className="gridAbout__image--container">
      <img className="gridAbout__image" src={media} alt="" />
    </div>
  </Link>
);

AboutFormat.propTypes = {
  media: PropTypes.string,
  link: PropTypes.string,
  specialty: PropTypes.array,
  isLastItem: PropTypes.bool,
};

AboutFormat.defaultProps = {
  media: "",
  link: "",
  specialty: ["Photography"],
  isLastItem: false,
};

export default AboutFormat;
