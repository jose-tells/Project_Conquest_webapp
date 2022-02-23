import React from "react";
import { Link } from "react-router-dom";
// Styles
import "@styles/components/MenuSlideItem.styl";

const MenuSlideItem = ({ name, link }) => (
  <li className="item--container">
    <Link className="item" to={`/${link === "home" ? "" : link}`}>
      {name}
    </Link>
  </li>
);

export default MenuSlideItem;
