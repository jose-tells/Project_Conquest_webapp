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
    <a className="socialMedia__item" href={instagram}>
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a className="socialMedia__item" href={youtube}>
      <FontAwesomeIcon icon={faYoutube} />
    </a>
    {!!discord && (
      <a className="socialMedia__item" href={discord}>
        <FontAwesomeIcon icon={faDiscord} />
      </a>
    )}
    {!!twitter && (
      <a className="socialMedia__item" href={twitter}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    )}
  </div>
);
export default SocialMedia;
