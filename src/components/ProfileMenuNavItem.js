import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../assets/styles/components/ProfileMenuNavItem.styl";

const ProfileMenuNavItem = ({ itemText }) => (
  <li className="profileMenuNav__items">
    <Link to={`/${itemText === "home" ? "" : itemText}`}>{itemText}</Link>
  </li>
);

export default ProfileMenuNavItem;
