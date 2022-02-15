import React from "react";
// Styles
import "../assets/styles/components/ProfileDescription.styl";

const ProfileDescription = ({ name, description }) => (
  <div className="profileDescription__description--container">
    <div className="profileDescription__title--container">
      <h1 className="profileDescription__title">{name}</h1>
      <div className="profileDescription__title--underline" />
    </div>
    <p className="profileDescription__description">{description}</p>
  </div>
);

export default ProfileDescription;
