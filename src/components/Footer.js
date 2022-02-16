import React from "react";
// Styles
import "../assets/styles/components/Footer.styl";
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
          <a href="http://www.instagram.com/projectconquestt">Insta</a>
          <a href="/">Discord</a>
          <a href="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag">
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
