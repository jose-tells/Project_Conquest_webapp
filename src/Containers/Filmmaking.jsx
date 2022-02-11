import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import Sections from "../components/Sections";
import GridVideo from "../components/GridVideo";
import Footer from "../components/Footer";
import VideoFormat from "../components/VideoFormat";
import VideoDescription from "../components/VideoDescription";
// Styles
import "../assets/styles/FilmmakingImports.styl";
// Redux
import { connect } from "react-redux";
import { getAPIVideos } from "../actions";

// const { V_API, V_API_KEY, V_API_COLLECTION_ID } = process.env;
const Filmmaking = ({ videos, getAPIVideos }) => {
  const pages = 4;

  React.useEffect(() => {
    getAPIVideos(
      process.env.V_API,
      process.env.V_API_COLLECTION_ID,
      pages,
      process.env.V_API_KEY
    );
  }, []);

  return (
    <main className="Filmmaking-body">
      <MenuNav isDark />
      <Sections section="Filmmaking" />
      {videos.length > 0 && (
        <GridVideo>
          {videos.map((item) => (
            <VideoFormat
              key={item.id}
              source={item.media.link}
              styles="video1"
            />
          ))}

          {/* {videos.map((item) => (
          <VideoDescription
            key={item.id}
            descriptionStyles={item.descriptionStyles}
            title={item.title}
            caption={item.caption}
            autor={item.autor}
          />
        ))} */}
        </GridVideo>
      )}
      <Footer isDark />
    </main>
  );
};

const mapStateToProps = (state) => ({
  videos: state.videos,
});

const mapDispatchToProps = {
  getAPIVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filmmaking);
