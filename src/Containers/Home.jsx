import React from "react";
//Styles
import "../assets/styles/IndexImports.styl";
// Components
import MenuNav from "../components/MenuNav";
import Title from "../components/Title";
import SocialMedia from "../components/SocialMedia";
import ButtonReel from "../components/ButtonReel";
import ButtonContact from "../components/ButtonContact";
// React-redux
import { getAPIVideo } from "../actions";
import { connect } from "react-redux";

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
        <video className="reel" autoPlay loop>
          <source src={player.link} />
        </video>
      )}
      <MenuNav isDark isLight />
      <main className="wrap_container">
        <ButtonReel />
        <Title />
        <SocialMedia />
        <ButtonContact />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = {
  getAPIVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
