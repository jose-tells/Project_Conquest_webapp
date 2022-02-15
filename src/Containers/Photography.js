import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import GridFormat from "../components/GridFormat";
import GridPhotos from "../components/GridPhotos";
import Footer from "../components/Footer";
import MenuSlideItem from "../components/MenuSlideItem";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// Connect from redux
import { connect } from "react-redux";
import { getAPIPhotos } from "../actions";
// Styles
import "../assets/styles/PortfolioImports.styl";

const Photography = ({ photos, getAPIPhotos, history }) => {
  React.useEffect(() => {
    getAPIPhotos(
      process.env.P_API,
      process.env.P_API_USER,
      process.env.P_API_ACCESS_KEY
    );
  }, []);

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

const items = ["home", "portfolio", "about", "contact"];

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = {
  getAPIPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photography);
