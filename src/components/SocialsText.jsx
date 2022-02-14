import React from "react";

const SocialsText = ({ socials, socialLink }) => (
  <a href={socialLink} className="gridContact__socialMedia--socials">
    {socials}
  </a>
);

export default SocialsText;
