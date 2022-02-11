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

const Portfolio = ({ photos, getAPIPhotos, sections }) => {

  React.useEffect(() => {
    getAPIPhotos(process.env.P_API, process.env.P_API_USER, process.env.P_API_ACCESS_KEY);
  }, []);

  return (
    <>
      <MenuNav isLight={false} />
      <Sections section="Photography">
        {sections.map((section) => (
          <SectionItem
            key={section.name}
            section={section.name}
          />
        ))}
      </Sections>
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
    sections: state.sections,
  };
};

const mapDispatchToProps = {
  getAPIPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
