import React from "react";
// Components
import AboutFormat from "../components/AboutFormat";
// Redux
import { getAPIMedia, getProfiles } from "../actions";
import { connect } from "react-redux";
// Styles
import "../assets/styles/components/GridAbout.styl";

const About = ({ profiles, getAPIMedia }) => {
  console.log(profiles);

  React.useEffect(() => {
    getAPIMedia("Profiles", getProfiles);
  }, []);
  return (
    <main className="gridAbout">
      {profiles.length > 0 &&
        profiles.map((item) => (
          <AboutFormat
            key={item.id}
            media={item.media}
            link={item.title.toLowerCase()}
            // specialty={}
          />
        ))}
      <h1 className="gridAbout__title">The Crazy Minds</h1>
    </main>
  );
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

const mapDispatchToProps = {
  getAPIMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
