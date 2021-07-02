import React from 'react'
// Components
import MenuNav from '../components/MenuNav'
import WelcomeMessages from '../components/WelcomeMessages'
import GridPortf from '../components/GridPortf'
import SeeMoreButton from '../components/SeeMoreButton'
import Footer from '../components/Footer'
// Styles
import '../assets/styles/HubImports.styl'

const Hub = () => {
    return (
        <>      
            <MenuNav />
            <WelcomeMessages />
            <GridPortf />
            <SeeMoreButton /> 
            <Footer/>
        </>
    )
};

export default Hub;