import React from 'react'
// Components 
import MenuNav from '../components/MenuNav'
import Sections from '../components/Sections';
import GridPhotos from '../components/GridPhotos'
import Footer from '../components/Footer'
// Styles
import '../assets/styles/PortfolioImports.styl'
// Media
import { PortfolioImages } from '../../PortfolioImages';

const Portfolio = () => {
    return (
        <>
            <MenuNav />
            <Sections 
                section="Photography"
            />
            <GridPhotos 
                Grid="gridPhotos"
                ForLoop={ PortfolioImages }
            />
            <Footer />
        </>
    )
};

export default Portfolio;