import React from "react";
import PropTypes from "prop-types";
// Components
import MenuNav from "@components/MenuNav";
import Title from "@components/Title";
import MenuSlideItem from "@components/MenuSlideItem";
// React-redux
import { getAPIMedia, getVideo } from "../actions";
import { connect } from "react-redux";
// Styles
import "@styles/Home.styl";

const Home = ({ getAPIMedia, player }) => {
  React.useEffect(() => {
    getAPIMedia("Videos", getVideo);
  }, []);

  const hasVideo = Object.values(player).length > 0;

  return (
    <>
      {hasVideo && (
        <div className="reel__container">
          <video className="reel" autoPlay loop muted src={player.fileUrl} />
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
  getAPIMedia,
};

Home.propTypes = {
  getAPIMedia: PropTypes.func,
  player: PropTypes.object,
};

Home.defaultProps = {
  getAPIMedia: () => {},
  player: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
