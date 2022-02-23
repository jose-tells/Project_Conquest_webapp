import {
  faDiscord,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfileMenuNav from "../components/ProfileMenuNav";
import ProfileMenuNavItem from "../components/ProfileMenuNavItem";

export const ProfileSkeleton = () => {
  const descriptionStyles = {
    width: "23rem",
    height: "6rem",
  };

  const titleStyles = {
    width: "17rem",
    height: "4rem",
  };

  const specialtyStyles = {
    width: "4rem",
    height: "20rem",
  };

  return (
    <>
      <ProfileMenuNav>
        {menuNavItems.map((item) => (
          <ProfileMenuNavItem key={item} itemText={item} />
        ))}
      </ProfileMenuNav>
      <div className="profile__specialty--container">
        <span className="profile__specialty skeleton" style={specialtyStyles} />
      </div>
      <div className="profile__photo" />
      <div className="profileDescription__description--container">
        <div className="profileDescription__title--container">
          <div
            className="profileDescription__title skeleton"
            style={titleStyles}
          />
          <div className="profileDescription__title--underline skeleton" />
        </div>
        <p
          className="profileDescription__description skeleton"
          style={descriptionStyles}
        />
        <div className="socialMedia__container">
          <div className="socialMedia__item disabled">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="socialMedia__item disabled">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="socialMedia__item disabled">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
          <div className="socialMedia__item disabled">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
      <div className="profile__nextBtn skeleton" />
    </>
  );
};

const menuNavItems = [
  "home",
  "portfolio",
  "photography",
  "filmmaking",
  "illustration",
  "contact",
];
