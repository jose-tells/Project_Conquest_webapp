import React from "react";
import { Link } from "react-router-dom";
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

export default SectionItem;
