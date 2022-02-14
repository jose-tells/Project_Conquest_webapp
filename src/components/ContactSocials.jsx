import React from "react";
// Components
import SocialsText from "./SocialsText";

const ContactSocials = () => (
  <div className="gridContact__socialMedia">
    <h1 className="gridContact__socialMedia--title">Follow us</h1>
    <SocialsText
      socials="Instagram"
      socialLink="https://www.instagram.com/projectconquestt/"
    />
    <SocialsText
      socials="Youtube"
      socialLink="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag"
    />
    <SocialsText
      socials="Twitter"
      socialLink="https://twitter.com/jose_tells"
    />
    <SocialsText socials="Discord" socialLink="https://discord.gg/UZSUxdfv" />
  </div>
);

export default ContactSocials;
