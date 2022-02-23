import React from "react";
// Components
import AboutFormat from "@components/AboutFormat";
// Skeletons
import { AboutFormatSkeleton } from "../LoadingSkeletons/AboutFormatSkeleton";
// Redux
import { getAPIMedia, getProfiles, onLoading } from "../actions";
import { connect } from "react-redux";
// Styles
import "@styles/components/GridAbout.styl";

const About = ({ profiles, getAPIMedia, keyStates, onLoading }) => {
  React.useEffect(() => {
    onLoading();
    getAPIMedia("Profiles", getProfiles);
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
  getAPIMedia,
  onLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
