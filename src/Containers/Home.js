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
  React.useEffect(() => {
    getAPIVideoCover("Videos");
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
