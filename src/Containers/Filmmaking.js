import React from "react";
// Components
import MenuNav from "@components/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import GridVideo from "@components/GridVideo";
import Footer from "@components/Footer";
import VideoFormat from "@components/VideoFormat";
import VideoDescription from "@components/VideoDescription";
// HOCs
import SectionsWithItems from "@components/SectionsWithItems";
// Styles
import "@styles/Filmmaking.styl";
// Redux
import { connect } from "react-redux";
import { getAPIMedia, getVideos } from "../actions";

const Filmmaking = ({ videos, getAPIMedia, history }) => {
  const hasVideos = videos.length > 0;

  React.useEffect(() => {
    getAPIMedia("Videos", getVideos);
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
          <VideoFormat
            source={videos[0].fileUrl}
            // position={isOdd(index + 1)}
          />
          {/* {videos.map((item, index) => (
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
          ))} */}
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
  getAPIMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filmmaking);
