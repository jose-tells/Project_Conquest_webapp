import React from "react";
import ReactDOM from "react-dom";
// Styles
import "./CarouselModal.styl";

const CarouselModal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="carousel__modal">{children}</div>,
    document.getElementById("modal")
  );

export default CarouselModal;
