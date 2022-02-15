import React from "react";
import { connect } from "react-redux";
// Components
import ProfileDescription from "../components/ProfileDescription";
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
      <img className="profile__photo" src={AGUSTIN} alt="" />
      <ProfileDescription
        name={profile.name}
        description={profile.description}
      />
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
