import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Classnames
import classnames from "classnames";

const SectionItem = ({ isSelected, section }) => {
  const SectionStyles = classnames("link", {
    isSelected,
  });

  return (
    <li>
      <Link to={`/${section.toLowerCase()}`} className={SectionStyles}>
        {section}
      </Link>
    </li>
  );
};

SectionItem.propTypes = {
  isSelected: PropTypes.bool,
  section: PropTypes.string,
};

SectionItem.defaultProps = {
  isSelected: false,
  section: "Photography",
};

export default SectionItem;
