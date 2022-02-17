import React from "react";
// Styles
import "../assets/styles/components/ProfileMenuNav.styl";

const ProfileMenuNav = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <nav className={`profileMenuNav__container ${isOpen ? "isOpen" : ""}`}>
      <ul className="profileMenuNav__items--container">{children}</ul>
      <button
        type="button"
        onClick={handleOpen}
        className="profileMenuNav__button"
      >
        <div />
        <div />
        <div />
      </button>
    </nav>
  );
};

export default ProfileMenuNav;
