import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS
// Classnames
import classNames from "classnames";
// Styles
import "../assets/styles/components/MenuNav.styl";

const MenuNav = ({ isDark, children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const logoStyle = classNames("menuNav__logo", {
    isDark,
  });

  const StylesMenuSlide = classNames("MenuSlide__container", {
    isDark,
    isOpen,
  });

  const menuNavButtonStyles = classNames("menuNav__button", {
    isOpen,
  });

  return (
    <nav className="menuNav__container">
      <Link className={logoStyle} to="/">
        PROJECT CONQUEST
      </Link>
      <button
        type="button"
        className={menuNavButtonStyles}
        onClick={handleClick}
      >
        Menu
      </button>
      <div className={StylesMenuSlide}>
        <ul className="MenuSlide__items--container">{children}</ul>
      </div>
    </nav>
  );
};

export default MenuNav;
