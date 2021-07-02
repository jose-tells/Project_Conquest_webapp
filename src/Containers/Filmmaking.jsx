import React from 'react'
// Components
import MenuNav from '../components/MenuNav';
import Sections from '../components/Sections';
import GridVideo from '../components/GridVideo'
import Footer from '../components/Footer';
// Styles
import '../assets/styles/FIlmmakingImports.styl'

const Filmmaking = () => {
    return(
        <>
            <MenuNav 
                isHome
            />
            <Sections 
                section="Filmmaking"
            />
            <GridVideo />
            <Footer />
        </>
    )
};

export default Filmmaking;