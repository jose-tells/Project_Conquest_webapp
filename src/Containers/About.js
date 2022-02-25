import React from "react";
import PropTypes from "prop-types";
// Components
import AboutFormat from "@components/AboutFormat";
// Skeletons
import { AboutFormatSkeleton } from "../LoadingSkeletons/AboutFormatSkeleton";
// Redux
import { getAPIProfiles, onLoading } from "../actions";
import { connect } from "react-redux";
// Styles
import "@styles/components/GridAbout.styl";

const About = ({ profiles, getAPIProfiles, keyStates, onLoading }) => {
  React.useEffect(() => {
    onLoading();
    getAPIProfiles("Profiles");
  }, []);

  return (
    <main className="gridAbout">
      {keyStates.loading && !keyStates.error && <AboutFormatSkeleton />}
      {keyStates.complete &&
        !keyStates.error &&
        profiles.map((item, index) => (
          <AboutFormat
            key={item.id}
            media={item.fileUrl}
            link={item.title.toLowerCase()}
            specialty={item.specialty}
            isLastItem={index === profiles.length - 1}
          />
        ))}
      <h1 className="gridAbout__title">The Crazy Minds</h1>
    </main>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getAPIProfiles,
  onLoading,
};

About.propTypes = {
  profiles: PropTypes.array,
  getAPIProfiles: PropTypes.func,
  keyStates: PropTypes.object,
  onLoading: PropTypes.func,
};

About.defaultProps = {
  profiles: [],
  getAPIProfiles: () => {},
  keyStates: {},
  onLoading: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
