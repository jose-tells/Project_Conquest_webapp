import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/GridFormat.styl";

const GridFormat = ({ media, orientation, setModalOpen, setMediaIndex }) => {
  const handleClick = () => {
    setModalOpen(true);
    setMediaIndex();
  };

  return (
    <div onClick={handleClick} className={`gridItem__container ${orientation}`}>
      <img className="gridItem__item" src={media} alt="" />
    </div>
  );
};

GridFormat.propTypes = {
  media: PropTypes.string,
  orientation: PropTypes.string,
  setModalOpen: PropTypes.func,
  setMediaIndex: PropTypes.func,
};

GridFormat.defaultProps = {
  media: "",
  orientation: "Landscape",
  setModalOpen: () => {},
  setMediaIndex: () => {},
};

export default GridFormat;
