import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import Title from "../components/Title";
import MenuSlideItem from "../components/MenuSlideItem";
// import ButtonReel from "../components/ButtonReel";
// React-redux
import { getAPIVideo } from "../actions";
import { connect } from "react-redux";
// Styles
import "../assets/styles/Home.styl";

const Home = ({ getAPIVideo, player }) => {
  React.useEffect(() => {
    getAPIVideo(
      process.env.V_API,
      process.env.V_API_VIDEO_ID,
      process.env.V_API_KEY
    );
  }, []);

  const hasVideo = Object.values(player).length > 0;

  return (
    <>
      {hasVideo && (
        <video className="reel" autoPlay loop muted>
          <source src={player.link} />
        </video>
      )}
      <MenuNav isDark>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <main className="wrap_container">
        {/* <ButtonReel /> */}
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
  getAPIVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
