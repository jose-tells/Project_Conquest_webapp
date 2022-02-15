import React from "react";
import { connect } from "react-redux";
// Redux
import { getProfile } from "../actions";

const Profile = ({ match, getProfile, profile }) => {
  const { name } = match.params;

  const hasProfile = Object.keys(profile).length > 0;

  React.useEffect(() => {
    getProfile(name);
  }, []);

  return hasProfile ? (
    <div>
      <h1>{profile.description}</h1>
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
