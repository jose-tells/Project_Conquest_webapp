import React from "react";
// import { Link } from "react-router-dom";
// MenuData
import classNames from "classnames";
// classnames

const MenuSlide = (props) => {
  const { open, handleClick, isLight } = props;

  // Conditioned style using props
  const styleTop = () => ({
    top: open ? "0" : "-100%",
  });

  const StylesMenuSlide = classNames("container-menu-bar", {
    isLight,
  });

  return (
    <div className={StylesMenuSlide} open={open} style={styleTop()}>
      <div className="menu-close-button" onClick={handleClick}>
        X
      </div>
      {/* <ul>
        {MenuItems.map((items, id) => (
          <li key={id}>
            <Link className={items.className} to={items.url}>
              {items.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MenuSlide;
