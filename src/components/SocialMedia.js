import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import "../assets/styles/components/SocialMedia.styl";

const SocialMedia = ({ instagram, youtube, discord, twitter }) => (
  <div className="socialMedia__container">
    <a href={instagram}>
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href={youtube}>
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    {!!discord && (
      <a href={discord}>
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    )}
    {!!twitter && (
      <a href={twitter}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    )}
  </div>
);
export default SocialMedia;
