import React from "react";
import ReactDOM from "react-dom";
// Styles
import "./Modal.styl";

const Modal = ({ children, modalStyles }) =>
  ReactDOM.createPortal(
    <div className={`Modal ${modalStyles ? "isOpen" : ""}`}>{children}</div>,
    document.getElementById("modal")
  );

export default Modal;
