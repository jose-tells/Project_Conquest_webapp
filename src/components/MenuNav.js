import React, { useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import MenuNavButton from "./MenuNavButton";
import MenuSlide from "./MenuSlide";
import MenuSlideItem from "./MenuSlideItem";
// Classnames
import classNames from "classnames";

const MenuNav = ({ isDark }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const LogoStyle = classNames("logo", {
    isDark,
  });

  return (
    <nav className="container-menu">
      <Link className={LogoStyle} to="/">
        PROJECT CONQUEST
      </Link>
      <MenuSlide isOpen={isOpen} handleClick={handleClick} isDark={isDark}>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuSlide>
      <MenuNavButton open={isOpen} handleClick={handleClick} />
    </nav>
  );
};

const items = ["home", "about", "contact"];

export default MenuNav;
