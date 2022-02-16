import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import MenuSlideItem from "../components/MenuSlideItem";
import GridVideo from "../components/GridVideo";
import Footer from "../components/Footer";
import VideoFormat from "../components/VideoFormat";
import VideoDescription from "../components/VideoDescription";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// Styles
import "../assets/styles/Filmmaking.styl";
// Redux
import { connect } from "react-redux";
import { getAPIVideos } from "../actions";

const Filmmaking = ({ videos, getAPIVideos, history }) => {
  const hasVideos = videos.length > 0;

  React.useEffect(() => {
    const pages = 4;
    getAPIVideos(
      process.env.V_API,
      process.env.V_API_COLLECTION_ID,
      pages,
      process.env.V_API_KEY
    );
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
              source={item.media.link}
              position={isOdd(index + 1)}
              hasVideos={hasVideos}
            >
              <VideoDescription position={isOdd(index + 1)} />
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
});

const mapDispatchToProps = {
  getAPIVideos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filmmaking);
