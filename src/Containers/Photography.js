import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import GridFormat from "../components/GridFormat";
import GridPhotos from "../components/GridPhotos";
import Footer from "../components/Footer";
import MenuSlideItem from "../components/MenuSlideItem";
import CarouselShowcaseItem from "../components/CarouselShowcaseItem";
import HeaderCarousel from "../components/HeaderCarousel";
import CarouselShowcase from "../components/CarouselShowcase";
import BodyCarousel from "../components/BodyCarousel";
import CarouselModal from "../Modal/CarouselModal";
// Skeletons
import { GridPhotosSkeleton } from "../LoadingSkeletons/GridPhotosSkeleton";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// React-redux
import { connect } from "react-redux";
import { getAPIMedia, getPhotos, onLoading } from "../actions";

const Photography = ({
  photos,
  getAPIMedia,
  history,
  keyStates,
  onLoading,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mediaIndex, setMediaIndex] = React.useState(0);

  const hasPhotos = photos.length > 0;

  React.useEffect(() => {
    onLoading();
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
      <GridPhotos>
        {keyStates.loading && !keyStates.error && <GridPhotosSkeleton />}
        {keyStates.complete &&
          !keyStates.error &&
          photos.map((item, index) => (
            <GridFormat
              key={item.id}
              media={item.media}
              orientation={item.orientation}
              setModalOpen={setModalOpen}
              setMediaIndex={() => setMediaIndex(index)}
            />
          ))}
      </GridPhotos>
      {modalOpen && (
        <CarouselModal>
          <HeaderCarousel itemId={mediaIndex + 1} setModalOpen={setModalOpen} />
          <BodyCarousel handleRight={handleRight} handleLeft={handleLeft}>
            {hasPhotos && (
              <img
                className="slider__reel--photo"
                src={photos[mediaIndex].media}
                alt=""
              />
            )}
          </BodyCarousel>
          <CarouselShowcase carouselStyles={carouselStyles}>
            {photos.map((item, index) => (
              <CarouselShowcaseItem
                key={item.id}
                index={index}
                mediaIndex={mediaIndex}
                setMediaIndex={setMediaIndex}
                media={item.media}
              />
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
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getAPIMedia,
  onLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photography);
