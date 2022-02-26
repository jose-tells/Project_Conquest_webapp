import React from "react";
import PropTypes from "prop-types";
// Components
import MenuNav from "@components/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import GridVideo from "@components/GridVideo";
import Footer from "@components/Footer";
import VideoFormat from "@components/VideoFormat";
import VideoDescription from "@components/VideoDescription";
// HOCs
import SectionsWithItems from "@components/SectionsWithItems";
// Redux
import { connect } from "react-redux";
import { getAPIVideos } from "../actions";
// Styles
import "@styles/Filmmaking.styl";

const Filmmaking = ({ videos, getAPIVideos, history, keyStates }) => {
  const hasVideos = videos.length > 0;

  React.useEffect(() => {
    getAPIVideos();
  }, []);

  const isOdd = (number) => {
    if (number % 2 === 0) {
      return "right";
    }
    return "left";
  };

  return (
    <main className="Filmmaking-body">
      <MenuNav isDark>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <SectionsWithItems
        sectionName="filmmaking"
        location={history.location.pathname}
      />
      {hasVideos && (
        <GridVideo>
          {videos.map((item, index) => (
            <VideoFormat
              key={item.id}
              source={item.fileUrl}
              position={isOdd(index + 1)}
            >
              <VideoDescription
                title={item.title}
                caption={item.caption}
                author={item.author}
                position={isOdd(index + 1)}
              />
            </VideoFormat>
          ))}
        </GridVideo>
      )}
      <Footer isDark />
    </main>
  );
};

const items = ["home", "portfolio", "about", "contact"];

const mapStateToProps = (state) => ({
  videos: state.videos,
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getAPIVideos,
};

Filmmaking.propTypes = {
  videos: PropTypes.array,
  getAPIVideos: PropTypes.func,
  keyStates: PropTypes.object,
};

Filmmaking.defaultProps = {
  videos: [],
  getAPIVideos: () => {},
  keyStates: {
    complete: false,
    loading: true,
    error: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Filmmaking);
