import React, { useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import MenuNavButton from "./MenuNavButton";
import MenuSlide from "./MenuSlide";
// Classnames
import classNames from "classnames";

const MenuNav = (props) => {
  const { isDark, isLight } = props;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const LogoStyle = classNames("logo", {
    isDark,
  });

  return (
    <nav className="container-menu">
      <Link className={LogoStyle} to="/">
        PROJECT CONQUEST
      </Link>
      <MenuSlide open={open} handleClick={handleClick} isLight={isLight} />
      <MenuNavButton open={open} handleClick={handleClick} />
    </nav>
  );
};

export default MenuNav;
