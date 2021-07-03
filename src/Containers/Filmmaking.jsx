import React from 'react'
// Components
import MenuNav from '../components/MenuNav';
import Sections from '../components/Sections';
import GridVideo from '../components/GridVideo'
import Footer from '../components/Footer';
// Styles
import '../assets/styles/FilmmakingImports.styl'

const Filmmaking = () => {
    return(
        <main className="Filmmaking-body">
            <MenuNav 
                isDark
            />
            <Sections 
                section="Filmmaking"
            />
            <GridVideo />
            <Footer 
                isDark
            />
        </main>
    )
};

export default Filmmaking;