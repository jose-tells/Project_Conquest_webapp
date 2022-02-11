import React from 'react'
// Components 
import MenuNav from '../components/MenuNav'
import Sections from '../components/Sections'
import GridPhotos from '../components/GridPhotos'
import Footer from '../components/Footer'
// Styles
import '../assets/styles/components/GridIlustrations.styl'
// Connect from redux
import { connect } from 'react-redux'

const Ilustration = props => {

    const { ilustrations } = props;

    return (
        <>
            <MenuNav />
            <Sections
                section="Ilustration"
            />
            <GridPhotos 
                media={ilustrations}
                Grid="gridIlustrations"
                OpenCarousel={() => props.history.push('/carousel')}
            />
            <Footer />
        </>
    )
};

const mapStateToProps = state => {
    return {
        ilustrations: state.ilustrations
    }
}

export default connect(mapStateToProps, null)(Ilustration);

