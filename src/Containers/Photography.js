import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import GridFormat from "../components/GridFormat";
import GridPhotos from "../components/GridPhotos";
import Footer from "../components/Footer";
import MenuSlideItem from "../components/MenuSlideItem";
// Carousel
import HeaderCarousel from "../components/HeaderCarousel";
import CarouselShowcase from "../components/CarouselShowcase";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// Connect from redux
import { connect } from "react-redux";
import { getAPIMedia, getPhotos } from "../actions";
// Styles
import CarouselModal from "../Modal/CarouselModal";

const Photography = ({ photos, getAPIMedia, history }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mediaIndex, setMediaIndex] = React.useState(0);

  const hasPhotos = photos.length > 0;

  React.useEffect(() => {
    getAPIMedia("Photos", getPhotos);
  }, []);

  const carouselStyles = () => {
    const position = 7.8 / 2 + 7.8 * mediaIndex;
    return {
      transform: `translateX(calc(50% - ${position}rem))`,
    };
  };

  const handleRight = () => {
    if (mediaIndex !== photos.length - 1) setMediaIndex((prev) => prev + 1);
  };

  const handleLeft = () => {
    if (mediaIndex > 0) setMediaIndex((prev) => prev - 1);
  };

  return (
    <>
      <MenuNav>
        {items.map((item) => (
          <MenuSlideItem key={item} name={item} link={item} />
        ))}
      </MenuNav>
      <SectionsWithItems
        sectionName="photography"
        location={history.location.pathname}
      />
      {hasPhotos && (
        <GridPhotos>
          {photos.map((item, index) => (
            <GridFormat
              key={item.id}
              media={item.media}
              orientation={item.orientation}
              setModalOpen={setModalOpen}
              setMediaIndex={() => setMediaIndex(index)}
            />
          ))}
        </GridPhotos>
      )}
      {modalOpen && (
        <CarouselModal>
          <HeaderCarousel itemId={mediaIndex + 1} setModalOpen={setModalOpen} />
          <section className="sliderReel__slider">
            <div
              className="sliderReel__showcase--buttons left"
              onClick={handleLeft}
            />
            {hasPhotos && (
              <img
                className="slider__reel--photo"
                src={photos[mediaIndex].media}
                alt=""
              />
            )}
            <div
              className="sliderReel__showcase--buttons right"
              onClick={handleRight}
            />
          </section>
          <CarouselShowcase carouselStyles={carouselStyles}>
            {photos.map((item, index) => (
              <div
                key={item.id}
                className={`sliderReel__showcaseImage--container ${
                  index === mediaIndex ? "selected" : ""
                }`}
                onClick={() => setMediaIndex(index)}
              >
                <img className="" src={item.media} alt="" />
              </div>
            ))}
          </CarouselShowcase>
        </CarouselModal>
      )}
      <Footer />
    </>
  );
};

const items = ["home", "portfolio", "about", "contact"];

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = {
  getAPIMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photography);
