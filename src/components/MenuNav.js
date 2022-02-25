import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Classnames
import classNames from "classnames";
// Styles
import "@styles/components/MenuNav.styl";

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
      <div className={menuNavButtonStyles} onClick={handleClick}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className={StylesMenuSlide}>
        <ul className="MenuSlide__items--container">{children}</ul>
      </div>
    </nav>
  );
};

MenuNav.propTypes = {
  isDark: PropTypes.bool,
  children: PropTypes.array.isRequired,
};

MenuNav.defaultProps = {
  isDark: false,
};

export default MenuNav;
