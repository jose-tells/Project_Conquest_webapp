import React from "react";
// FontAwesome
import { faInfo, faXmark, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import "@styles/components/HeaderReel.styl";

const HeaderReel = ({ itemId, setModalOpen }) => (
  <header className="sliderReel__header">
    <h1 className="sliderReel__header--number">{itemId}/20</h1>
    <div className="sliderReel__header--buttons">
      <button type="button">
        <FontAwesomeIcon icon={faInfo} />
      </button>
      <button type="button">
        <FontAwesomeIcon icon={faShare} />
      </button>
      <button type="button" onClick={() => setModalOpen(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  </header>
);

export default HeaderReel;
