import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
// Classnames
import classNames from "classnames";
// Styles
import "@styles/components/Footer.styl";
import { Link } from "react-router-dom";

const Footer = ({ isDark }) => {
  const FooterStyles = classNames("footer", {
    isDark,
  });

  return (
    <footer className={FooterStyles}>
      <div className="footer__header">
        <div className="footer__header--underline" />
        <h1 className="footer__header--title">Project Conquest</h1>
        <div className="footer__header--underline" />
      </div>
      <div className="footer__brand">
        <section className="footer__social--media">
          <a href="http://www.instagram.com/projectconquestt">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://discord.gg/89dtH59Wrv">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </section>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDark: PropTypes.bool,
};

Footer.defaultProps = {
  isDark: false,
};

export default Footer;
