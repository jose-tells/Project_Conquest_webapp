import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../assets/styles/components/AboutFormat.styl";

const AboutFormat = ({ media, link, specialty, specialty2, position }) => (
  <Link to={`/about/${link}`} className="gridAbout__item--container">
    {/* <div className={`gridAbout__specialty--container ${position}`}>
      <h1 className="gridAbout__specialty">{specialty}</h1>
    </div>
    {specialty2 && (
      <div className="gridAbout__specialty--container second">
        <h1 className="gridAbout__specialty">{specialty2}</h1>
      </div>
    )} */}
    <img className="gridAbout__image" src={media} alt="" />
  </Link>
);

export default AboutFormat;
