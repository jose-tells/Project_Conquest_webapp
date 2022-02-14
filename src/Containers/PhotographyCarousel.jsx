import React, { useEffect, useState } from "react";
// Components
import HeaderCarousel from "../components/HeaderCarousel";
import SliderCarousel from "../components/SliderCarousel";
import CarouselShowcase from "../components/CarouselShowcase";
// Styles
import "../assets/styles/components/PhotographyCarousel.styl";
// Connect from redux
import { connect } from "react-redux";
// Actions
import { findPhoto } from "../actions";

const PhotographyCarousel = ({ findPhoto, match, carousel, history }) => {
  const [itemId, getId] = useState("");

  const { id } = match.params;

  const handleCallback = () => {
    getId(itemId);
  };

  useEffect(() => {
    findPhoto(id);
  }, []);

  return (
    <main className="Carousel-body">
      <HeaderCarousel itemId={itemId} goBack={() => history.goBack()} />
      <SliderCarousel media={carousel} setId={handleCallback} />
      <CarouselShowcase />
    </main>
  );
};

const mapStateToProps = (state) => ({
  carousel: state.carousel,
});

const mapDispatchToProps = {
  findPhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotographyCarousel);
