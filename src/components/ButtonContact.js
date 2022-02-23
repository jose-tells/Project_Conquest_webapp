import React from "react";
import { Link } from "react-router-dom";
// Styles
import "@styles/components/ButtonContact.styl";

const ButtonContact = () => (
  <div className="buttonContact__container">
    <Link to="/contact">CONTACT US!</Link>
  </div>
);
export default ButtonContact;
