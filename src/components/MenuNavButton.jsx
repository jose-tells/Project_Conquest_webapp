import React from "react";

const MenuNavButton = ({ open, handleClick }) =>
  !open ? (
    <button type="button" className="menu-button" onClick={handleClick}>
      Menu
    </button>
  ) : (
    <button type="button" className="menu-button">
      Menu
    </button>
  );

export default MenuNavButton;
