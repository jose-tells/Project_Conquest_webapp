import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/Sections.styl";

const Sections = ({ children, section }) => (
  <header className="sections">
    <ul className="sections__items">{children}</ul>
    <h1 className="sections__title">{section}</h1>
  </header>
);

Sections.propTypes = {
  children: PropTypes.array.isRequired,
  section: PropTypes.string,
};

Sections.defaultProps = {
  section: "Photography",
};

export default Sections;
