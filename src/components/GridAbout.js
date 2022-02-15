import React, { useState } from "react";
import AboutFormat from "./AboutFormat";
// Media
import AGUSTIN from "../assets/static/img/Agustin-Blog.jpg";
import JOSE from "../assets/static/img/mi_cara.jpg";
import JONNY from "../assets/static/img/Frame-hermanos H.jpg";

// Styles
import "../assets/styles/components/GridAbout.styl";

const GridAbout = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <main className="gridAbout">
      <AboutFormat media={AGUSTIN} specialty="VFX" />
      <AboutFormat
        media={JOSE}
        specialty="Filmmaking"
        specialty2="Photography"
      />
      <AboutFormat media={JONNY} specialty="Illustration" />
      <h1 className="gridAbout__title">The Crazy Minds</h1>
    </main>
  );
};

export default GridAbout;
