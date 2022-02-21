import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import MenuSlideItem from "../components/MenuSlideItem";
import PresentationCard from "../components/PresentationCard";
import RedirectLink from "../components/RedirectLink";
import LinkCard from "../components/LinkCard";
import Footer from "../components/Footer";
// Redux
import { connect } from "react-redux";
import {
  getAPIMedia,
  getPhotos,
  getIllustrations,
  getVideos,
  getPhoto,
  getSpecificMedia,
} from "../actions";
// Styles
import "../assets/styles/Portfolio.styl";

const Portfolio = ({
  getAPIMedia,
  getSpecificMedia,
  photos,
  illustrations,
  videos,
  photo,
}) => {
  React.useEffect(() => {
    getAPIMedia("Photos", getPhotos);
    getAPIMedia("Illustrations", getIllustrations);
    getAPIMedia("Videos", getVideos);
    getSpecificMedia("Photos", "caption", "portfolio", getPhoto);
  }, []);

  return (
    <>
      <MenuNav>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <PresentationCard photo={photo.fileUrl} caption={photo.caption} />
      <div className="titlePortfolio__container">
        <div className="titlePortfolio__strokes" />
        <h1 className="titlePortfolio__text">Portfolio</h1>
        <div className="titlePortfolio__strokes" />
      </div>
      <section className="linkCards__wrapper">
        <LinkCard
          cardTitle="photography"
          media={photos}
          renderImagesReel={(media) => (
            <img
              key={media.id}
              className="linkCard__image"
              src={media.media}
              alt={media.description}
            />
          )}
        >
          <RedirectLink link="photography" linkText="See More" />
        </LinkCard>
        <LinkCard
          cardTitle="illustration"
          media={illustrations}
          renderImagesReel={(media) => (
            <img
              key={media.id}
              className="linkCard__image"
              src={media.media}
              alt={media.description}
            />
          )}
        >
          <RedirectLink link="illustration" linkText="See More" />
        </LinkCard>
        <LinkCard
          cardTitle="filmmaking"
          media={videos}
          renderImagesReel={(media) => (
            <video
              key={media.id}
              className="linkCard__image"
              src={media.media}
              alt={media.description}
              muted
            />
          )}
        >
          <RedirectLink link="filmmaking" linkText="See More" />
        </LinkCard>
      </section>
      <Footer />
    </>
  );
};

const items = ["home", "about", "contact"];

const mapStateToProps = (state) => ({
  photo: state.photo,
  photos: state.photos,
  illustrations: state.illustrations,
  videos: state.videos,
});

const mapDispatchToProps = {
  getAPIMedia,
  getSpecificMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
