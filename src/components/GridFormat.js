import React from "react";
// Styles
import "../assets/styles/components/GridFormat.styl";

const GridFormat = ({ media, orientation, setModalOpen, setMediaIndex }) => {
  const handleClick = () => {
    setModalOpen(true);
    setMediaIndex();
  };

  return (
    <div onClick={handleClick} className={`gridItem ${orientation}`}>
      <img src={media} alt="" />
    </div>
  );
};

export default GridFormat;
