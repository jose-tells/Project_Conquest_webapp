import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import Sections from "../components/Sections";
import GridFormat from "../components/GridFormat";
import GridPhotos from "../components/GridPhotos";
import SectionItem from "../components/SectionItem";
import Footer from "../components/Footer";
// Styles
import "../assets/styles/PortfolioImports.styl";
// Connect from redux
import { connect } from "react-redux";
import { getAPIPhotos } from "../actions";
import SectionsWithItems from "../components/SectionsWithItems";

const Portfolio = ({ photos, getAPIPhotos, history }) => {
  React.useEffect(() => {
    getAPIPhotos(
      process.env.P_API,
      process.env.P_API_USER,
      process.env.P_API_ACCESS_KEY
    );
  }, []);

  return (
    <>
      <MenuNav isLight={false} />
      <SectionsWithItems
        sectionName="photography"
        location={history.location.pathname}
      />
      {photos && (
        <GridPhotos Grid="gridPhotos">
          {photos.map((item) => (
            <GridFormat key={item.id} media={item.media} />
          ))}
        </GridPhotos>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = {
  getAPIPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
