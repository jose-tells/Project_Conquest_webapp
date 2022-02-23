import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import MenuSlideItem from "../components/MenuSlideItem";
import GridPhotos from "../components/GridPhotos";
import GridFormat from "../components/GridFormat";
import Footer from "../components/Footer";
import CarouselModal from "../Modal/CarouselModal";
import HeaderCarousel from "../components/HeaderCarousel";
import CarouselShowcase from "../components/CarouselShowcase";
import CarouselShowcaseItem from "../components/CarouselShowcaseItem";
import BodyCarousel from "../components/BodyCarousel";
// Skeletons
import { GridPhotosSkeleton } from "../LoadingSkeletons/GridPhotosSkeleton";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// Redux
import { connect } from "react-redux";
import { getAPIMedia, getIllustrations, onLoading } from "../actions";

const Illustration = ({
  history,
  illustrations,
  getAPIMedia,
  keyStates,
  onLoading,
}) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mediaIndex, setMediaIndex] = React.useState(0);

  const hasIllustrations = illustrations.length > 0;

  React.useEffect(() => {
    onLoading();
    getAPIMedia("Illustrations", getIllustrations);
  }, []);

  const carouselStyles = () => {
    const position = 7.8 / 2 + 7.8 * mediaIndex;
    return {
      transform: `translateX(calc(50% - ${position}rem))`,
    };
  };

  const handleRight = () => {
    if (mediaIndex !== illustrations.length - 1)
      setMediaIndex((prev) => prev + 1);
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
        sectionName="illustration"
        location={history.location.pathname}
      />
      <GridPhotos>
        {keyStates.loading && !keyStates.error && <GridPhotosSkeleton />}
        {keyStates.complete &&
          !keyStates.error &&
          illustrations.map((item, index) => (
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
            {hasIllustrations && (
              <img
                className="slider__reel--photo"
                src={illustrations[mediaIndex].media}
                alt=""
              />
            )}
          </BodyCarousel>
          <CarouselShowcase carouselStyles={carouselStyles}>
            {illustrations.map((item, index) => (
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
  illustrations: state.illustrations,
  keyStates: state.keyStates,
});

const mapDispatchToProps = {
  getAPIMedia,
  onLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Illustration);
