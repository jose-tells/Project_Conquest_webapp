import React from "react";
// Styles
import "@styles/components/ProfileMenuNav.styl";
import PropTypes from "prop-types";

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

ProfileMenuNav.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ProfileMenuNav;
