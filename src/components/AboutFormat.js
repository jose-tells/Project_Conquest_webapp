import React from "react";
// Styles
import "../assets/styles/components/AboutFormat.styl";

const AboutFormat = ({ media, specialty, specialty2 }) => (
  <div className="gridAbout__item--container">
    {/* <div className="gridAbout__specialty--container">
      <h1 className="gridAbout__specialty">{specialty}</h1>
    </div>
    {specialty2 && (
      <div className="gridAbout__specialty--container">
        <h1 className="gridAbout__specialty second">{specialty2}</h1>
      </div>
    )} */}
    <img className="gridAbout__image" src={media} alt="" />
  </div>
);

export default AboutFormat;