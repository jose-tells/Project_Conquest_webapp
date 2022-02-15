import React from "react";
// Components
import AboutFormat from "../components/AboutFormat";
// Media
import AGUSTIN from "../assets/static/img/Agustin-Blog.jpg";
import JOSE from "../assets/static/img/mi_cara.jpg";
import JONNY from "../assets/static/img/Frame-hermanos H.jpg";
// Styles
import "../assets/styles/components/GridAbout.styl";

const About = () => (
  <main className="gridAbout">
    <AboutFormat media={AGUSTIN} specialty="VFX" position="left" />
    <AboutFormat
      media={JOSE}
      specialty="Filmmaking"
      specialty2="Photography"
      position="left"
    />
    <AboutFormat media={JONNY} specialty="Illustration" position="right" />
    <h1 className="gridAbout__title">The Crazy Minds</h1>
  </main>
);

export default About;
