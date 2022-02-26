import React from "react";
import PropTypes from "prop-types";
// Components
import MenuNav from "@components/MenuNav";
import Title from "@components/Title";
import MenuSlideItem from "@components/MenuSlideItem";
// React-redux
import { getAPIVideoCover } from "../actions";
import { connect } from "react-redux";
// Styles
import "@styles/Home.styl";

const Home = ({ getAPIVideoCover, player }) => {
  const videoRef = React.useRef(null);

  const hasVideo = Object.values(player).length > 0;

  React.useEffect(() => {
    getAPIVideoCover(
      process.env.API_URL_V,
      process.env.API_KEY_V,
      process.env.VIDEO_COVER_ID
    );
  }, [hasVideo]);

  return (
    <>
      {hasVideo && (
        <div className="reel__container">
          <video
            autoPlay
            ref={videoRef}
            className="reel"
            loop
            muted
            type="video/mp4"
            playsInline
            src={player.media}
          />
        </div>
      )}
      <MenuNav isDark>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <main className="wrap_container">
        <Title />
      </main>
    </>
  );
};

const items = ["portfolio", "about", "contact"];

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = {
  getAPIVideoCover,
};

Home.propTypes = {
  getAPIVideoCover: PropTypes.func,
  player: PropTypes.object,
};

Home.defaultProps = {
  getAPIVideoCover: () => {},
  player: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
