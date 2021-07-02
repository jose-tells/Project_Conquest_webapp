import React from 'react'
// Components 
import MenuNav from '../components/MenuNav'
import Sections from '../components/Sections'
import GridPhotos from '../components/GridPhotos'
import Footer from '../components/Footer'
// Ilustrations
import {PortfolioIlustrations} from '../../PortfolioIlustrations'
// Styles
import '../assets/styles/components/GridIlustrations.styl'

const Ilustration = () => {
    return (
        <>
            <MenuNav />
            <Sections
                section="Ilustration"
            />
            <GridPhotos 
                Grid="gridIlustrations"
                ForLoop = { PortfolioIlustrations }
            />
            <Footer />
        </>
    )
};

export default Ilustration;

