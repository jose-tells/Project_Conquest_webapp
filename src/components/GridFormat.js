import React from "react";
// Styles
import "../assets/styles/components/GridFormat.styl";

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

export default GridFormat;
