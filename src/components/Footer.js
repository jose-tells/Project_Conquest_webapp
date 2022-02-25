import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
// Styles
import "@styles/components/Footer.styl";
// Classnames
import classNames from "classnames";

const Footer = ({ isDark }) => {
  const FooterStyles = classNames("footer", {
    isDark,
  });

  return (
    <footer className={FooterStyles}>
      <div className="footer__contact">
        <p>josemarquinez28@gmail.com</p>
        <p>(+507) 63820564</p>
      </div>
      <div className="footer__brand">
        <p>Project Conquest</p>
        <div className="footer__social-media">
          <a href="http://www.instagram.com/projectconquestt">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
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
