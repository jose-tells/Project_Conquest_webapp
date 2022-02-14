import React from "react";

const Sections = ({ children, section }) => (
  <header className="sections">
    <ul className="sections__items">{children}</ul>
    <h1 className="sections__title">{section}</h1>
  </header>
);

export default Sections;
