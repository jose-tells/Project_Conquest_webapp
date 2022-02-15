import React from "react";
// Components
import MenuNav from "../components/MenuNav";
import MenuSlideItem from "../components/MenuSlideItem";
// import GridPhotos from "../components/GridPhotos";
import Footer from "../components/Footer";
// HOCs
import SectionsWithItems from "../components/SectionsWithItems";
// Styles
import "../assets/styles/components/GridIlustrations.styl";
// Connect from redux
// import { connect } from "react-redux";

const Illustration = ({ history }) => (
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
    {/* <GridPhotos
        media={ilustrations}
        Grid="gridIlustrations"
        OpenCarousel={() => props.history.push("/carousel")}
      /> */}
    <Footer />
  </>
);

const items = ["home", "portfolio", "about", "contact"];

// const mapStateToProps = (state) => {
//   return {
//     illustrations: state.illustrations,
//   };
// };

// export default connect(mapStateToProps, null)(Illustration);
export default Illustration;
