import React from "react";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import "@styles/components/ContactSocials.styl";

const ContactSocials = () => (
  <div className="gridContact__socialMedia">
    <h1 className="gridContact__socialMedia--title">Follow us!</h1>
    <a
      href="https://www.instagram.com/projectconquestt/"
      className="gridContact__socialMedia--socials"
    >
      Instagram
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a
      href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag"
      className="gridContact__socialMedia--socials"
    >
      Youtube
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    <a
      href="https://twitter.com/jose_tells"
      className="gridContact__socialMedia--socials"
    >
      Twitter
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="/" className="gridContact__socialMedia--socials">
      Discord
      <FontAwesomeIcon icon={faDiscord} />
    </a>
  </div>
);

export default ContactSocials;
