import React from "react";
import { Link } from "react-router-dom";
// Components
import ProfileDescription from "@components/ProfileDescription";
import SocialMedia from "@components/SocialMedia";
import ProfileMenuNav from "@components/ProfileMenuNav";
import ProfileMenuNavItem from "@components/ProfileMenuNavItem";
// Skeletons
import { ProfileSkeleton } from "../LoadingSkeletons/ProfileSkeleton";
// Redux
import { connect } from "react-redux";
import { getSpecificMedia, getProfile, onLoading } from "../actions";
// Styles
import "@styles/Profile.styl";
import PropTypes from "prop-types";

const Profile = ({
  match,
  getSpecificMedia,
  profile,
  keyStates,
  onLoading,
}) => {
  const { name } = match.params;

  React.useEffect(() => {
    onLoading();
    getSpecificMedia("Profiles", "title", name, getProfile);
  }, [name]);

  return (
    <div className="profile__container">
      {keyStates.loading && !keyStates.error && <ProfileSkeleton />}
      {keyStates.complete && !keyStates.error && (
        <>
          <ProfileMenuNav>
            {menuNavItems.map((item) => (
              <ProfileMenuNavItem key={item} itemText={item} />
            ))}
          </ProfileMenuNav>
          {profile.specialty?.map((item, index) => (
            <div
              key={item}
              className={`profile__specialty--container ${
                index === 1 ? "second" : ""
              }`}
            >
              <span className="profile__specialty">{item}</span>
            </div>
          ))}
          <img className="profile__photo" src={profile.fileUrl} alt="" />
          <ProfileDescription
            name={profile.title}
            description={profile.description}
          >
            <SocialMedia
              instagram={profile.socials?.instagram}
              youtube={profile.socials?.youtube}
              twitter={profile.socials?.twitter}
            />
          </ProfileDescription>
          <Link
            to={`/about/${profile.next?.title.toLowerCase()}`}
            className={`profile__nextBtn ${
              profile.specialty?.length > 1 ? "left" : ""
            }`}
          >
            <span className="profile__nextBtn--text">{profile.title}</span>
          </Link>
        </>
      )}
    </div>
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
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getSpecificMedia,
  onLoading,
};

Profile.propTypes = {
  getSpecificMedia: PropTypes.func,
  profile: PropTypes.object,
  keyStates: PropTypes.object,
  onLoading: PropTypes.func,
};

Profile.defaultProps = {
  getSpecificMedia: () => {},
  profile: {},
  keyStates: {},
  onLoading: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
