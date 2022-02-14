import React from "react";

const AboutFormat = ({ specialty, specialty2, open, handleClick }) => (
  <div className="gridAbout__item" onClick={handleClick} open={open}>
    <h1 className="gridAbout__item--image">XD</h1>
    <h1 className="gridAbout__item--specialty">{specialty}</h1>
    <h1 className="gridAbout__item--specialty">{specialty2}</h1>
  </div>
);

export default AboutFormat;
