import React from "react";
// Classnames
import classNames from "classnames";

const MenuSlide = ({ children, isOpen, handleClick, isDark }) => {
  const styleTop = () => ({
    top: isOpen ? "0" : "-100%",
  });

  const StylesMenuSlide = classNames("MenuSlide__container", {
    isDark,
  });

  return (
    <div className={StylesMenuSlide} style={styleTop()}>
      <div className="MenuSlide__close" onClick={handleClick}>
        X
      </div>
      <ul className="MenuSlide__items--container">{children}</ul>
    </div>
  );
};

export default MenuSlide;
