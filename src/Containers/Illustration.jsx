import React from "react";
// Components
import MenuNav from "../components/MenuNav";
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
    <MenuNav />
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

// const mapStateToProps = (state) => {
//   return {
//     illustrations: state.illustrations,
//   };
// };

// export default connect(mapStateToProps, null)(Illustration);
export default Illustration;
