import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import "@styles/components/ProfileMenuNavItem.styl";

const ProfileMenuNavItem = ({ itemText }) => (
  <li className="profileMenuNav__items">
    <Link to={`/${itemText === "home" ? "" : itemText}`}>{itemText}</Link>
  </li>
);

ProfileMenuNavItem.propTypes = {
  itemText: PropTypes.string,
};

ProfileMenuNavItem.defaultProps = {
  itemText: "home",
};

export default ProfileMenuNavItem;
