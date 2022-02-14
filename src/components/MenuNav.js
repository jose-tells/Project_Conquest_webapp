import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import MenuSlide from "./MenuSlide";
import MenuSlideItem from "./MenuSlideItem";
// Classnames
import classNames from "classnames";
// Styles
import "../assets/styles/components/MenuNav.styl";

const MenuNav = ({ isDark }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const logoStyle = classNames("menuNav__logo", {
    isDark,
  });

  const menuNavButtonStyles = classNames("menuNav__button", {
    isOpen,
  });

  return (
    <nav className="menuNav__container">
      <Link className={logoStyle} to="/">
        PROJECT CONQUEST
      </Link>
      <MenuSlide isOpen={isOpen} handleClick={handleClick} isDark={isDark}>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuSlide>
      <button
        type="button"
        className={menuNavButtonStyles}
        onClick={handleClick}
      >
        Menu
      </button>
    </nav>
  );
};

const items = ["home", "about", "contact"];

export default MenuNav;
