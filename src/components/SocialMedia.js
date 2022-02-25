import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import "@styles/components/SocialMedia.styl";

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

SocialMedia.propTypes = {
  instagram: PropTypes.string,
  youtube: PropTypes.string,
  discord: PropTypes.string,
  twitter: PropTypes.string,
};

SocialMedia.defaultProps = {
  instagram: "#",
  youtube: "#",
  discord: "#",
  twitter: "#",
};

export default SocialMedia;
