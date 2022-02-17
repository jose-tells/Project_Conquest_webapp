import React from "react";
import { Link } from "react-router-dom";
// Components
import ProfileDescription from "../components/ProfileDescription";
import SocialMedia from "../components/SocialMedia";
import ProfileMenuNav from "../components/ProfileMenuNav";
import ProfileMenuNavItem from "../components/ProfileMenuNavItem";
// Redux
import { connect } from "react-redux";
import { getProfile } from "../actions";
// Media
import AGUSTIN from "../assets/static/img/Agustin-Blog.jpg";
// Styles
import "../assets/styles/Profile.styl";

const Profile = ({ match, getProfile, profile, history }) => {
  const { name } = match.params;

  const hasProfile = Object.keys(profile).length > 0;

  React.useEffect(() => {
    getProfile(name);
  }, [name]);

  return hasProfile ? (
    <div className="profile__container">
      <ProfileMenuNav>
        {menuNavItems.map((item) => (
          <ProfileMenuNavItem key={item} itemText={item} />
        ))}
      </ProfileMenuNav>
      {profile.specialty.map((item, index) => (
        <div
          key={item}
          className={`profile__specialty--container ${
            index === 1 ? "second" : ""
          }`}
        >
          <span className="profile__specialty">{item}</span>
        </div>
      ))}
      <img className="profile__photo" src={AGUSTIN} alt="" />
      <ProfileDescription name={profile.name} description={profile.description}>
        <SocialMedia
          instagram={profile.socials.instagram}
          youtube={profile.socials.youtube}
          twitter={profile.socials.twitter}
        />
      </ProfileDescription>
      <Link
        to={`/about/${profile.next?.name.toLowerCase()}`}
        className={`profile__nextBtn ${
          profile.specialty.length > 1 ? "left" : ""
        }`}
      >
        <span className="profile__nextBtn--text">{profile.name}</span>
      </Link>
    </div>
  ) : (
    <div>Not found</div>
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

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
