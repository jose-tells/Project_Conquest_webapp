import React from "react";
import { connect } from "react-redux";
// Components
import ProfileDescription from "../components/ProfileDescription";
import SocialMedia from "../components/SocialMedia";
// Redux
import { getProfile } from "../actions";
// Media
import AGUSTIN from "../assets/static/img/Agustin-Blog.jpg";
// Styles
import "../assets/styles/Profile.styl";

const Profile = ({ match, getProfile, profile }) => {
  const { name } = match.params;

  const hasProfile = Object.keys(profile).length > 0;

  React.useEffect(() => {
    getProfile(name);
  }, []);

  return hasProfile ? (
    <div className="profile__container">
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
      <button
        type="button"
        className={`profile__nextBtn ${
          profile.specialty.length > 1 ? "left" : ""
        }`}
      >
        <span className="profile__nextBtn--text">{profile.name}</span>
      </button>
    </div>
  ) : (
    <div>Not found</div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
