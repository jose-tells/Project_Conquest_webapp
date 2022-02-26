import React from "react";
import PropTypes from "prop-types";
// Components
import MenuNav from "@components/MenuNav";
import MenuSlideItem from "@components/MenuSlideItem";
import PresentationCard from "@components/PresentationCard";
import PresentationCardImage from "@components/PresentationCardImage";
import RedirectLink from "@components/RedirectLink";
import LinkCard from "@components/LinkCard";
import Footer from "@components/Footer";
// Loading Skeletons
import { LinkCardSkeleton } from "../LoadingSkeletons/LinkCardSkeleton";
import { PresentationCardSkeleton } from "../LoadingSkeletons/PresentationCardSkeleton";
// Redux
import { connect } from "react-redux";
import {
  getAPIPhotos,
  getAPIIllustrations,
  getAPIVideosThumbnails,
  getAPIPhotoCover,
  onLoading,
} from "../actions";
// Styles
import "../assets/styles/Portfolio.styl";

const Portfolio = ({
  getAPIPhotoCover,
  getAPIIllustrations,
  getAPIPhotos,
  getAPIVideosThumbnails,
  photos,
  illustrations,
  videosThumbnails,
  photo,
  keyStates,
  onLoading,
}) => {
  React.useEffect(() => {
    onLoading();
    getAPIPhotos(2);
    getAPIIllustrations(2);
    getAPIVideosThumbnails();
    getAPIPhotoCover("Photos");
  }, []);

  return (
    <>
      <MenuNav>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <PresentationCard>
        {keyStates.loading && !keyStates.error && <PresentationCardSkeleton />}
        {keyStates.complete && !keyStates.error && (
          <PresentationCardImage
            media={photo.fileUrl}
            caption={photo.caption}
          />
        )}
      </PresentationCard>

      <div className="titlePortfolio__container">
        <div className="titlePortfolio__strokes" />
        <h1 className="titlePortfolio__text">Portfolio</h1>
        <div className="titlePortfolio__strokes" />
      </div>
      <section className="linkCards__wrapper">
        {keyStates.loading && !keyStates.error && (
          <>
            <LinkCardSkeleton />
            <LinkCardSkeleton />
            <LinkCardSkeleton />
          </>
        )}
        {!keyStates.error && keyStates.complete && (
          <>
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
              media={videosThumbnails}
              renderImagesReel={(media) => (
                <img
                  key={media.id}
                  className="linkCard__image"
                  src={media.link}
                  alt=""
                />
              )}
            >
              <RedirectLink link="filmmaking" linkText="See More" />
            </LinkCard>
          </>
        )}
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
  videosThumbnails: state.videosThumbnails,
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getAPIPhotos,
  getAPIIllustrations,
  getAPIVideosThumbnails,
  getAPIPhotoCover,
  onLoading,
};

Portfolio.propTypes = {
  getAPIPhotoCover: PropTypes.func,
  getAPIPhotos: PropTypes.func,
  getAPIIllustrations: PropTypes.func,
  getAPIVideosThumbnails: PropTypes.func,
  photos: PropTypes.array,
  illustrations: PropTypes.array,
  videosThumbnails: PropTypes.array,
  photo: PropTypes.object,
  keyStates: PropTypes.object,
  onLoading: PropTypes.func,
};

Portfolio.defaultProps = {
  getAPIPhotoCover: () => {},
  getAPIPhotos: () => {},
  getAPIIllustrations: () => {},
  getAPIVideosThumbnails: () => {},
  photos: [],
  illustrations: [],
  videosThumbnails: [],
  photo: {},
  keyStates: {},
  onLoading: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
