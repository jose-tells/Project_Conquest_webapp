import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/ProfileDescription.styl";

const ProfileDescription = ({ name, description, children }) => (
  <div className="profileDescription__description--container">
    <div className="profileDescription__title--container">
      <h1 className="profileDescription__title">{name}</h1>
      <div className="profileDescription__title--underline" />
    </div>
    <p className="profileDescription__description">{description}</p>
    {children}
  </div>
);

ProfileDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

ProfileDescription.defaultProps = {
  name: "Jose",
  description:
    "Oh, you came across this default message! So, let's make it not boring, say something fun!",
};

export default ProfileDescription;
