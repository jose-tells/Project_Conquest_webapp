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

const PhotographyCarousel = (props) => {
  const [itemId, getId] = useState("");

  const { carousel } = props;

  const { id } = props.match.params;

  const handleCallback = (itemId) => {
    getId(itemId);
  };

  useEffect(() => {
    props.findPhoto(id);
  }, []);

  return (
    <main className="Carousel-body">
      <HeaderCarousel itemId={itemId} goBack={() => props.history.goBack()} />
      <SliderCarousel media={carousel} setId={handleCallback} />
      <CarouselShowcase />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    carousel: state.carousel,
  };
};

const mapDispatchToProps = {
  findPhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotographyCarousel);
