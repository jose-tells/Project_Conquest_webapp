import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "@styles/components/MenuSlideItem.styl";

const MenuSlideItem = ({ name, link }) => (
  <li className="item--container">
    <Link className="item" to={`/${link === "home" ? "" : link}`}>
      {name}
    </Link>
  </li>
);

MenuSlideItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

MenuSlideItem.defaultProps = {
  name: "Home",
  link: "",
};

export default MenuSlideItem;
