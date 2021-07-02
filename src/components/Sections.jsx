import React from 'react'
// Components
import SectionItem from './SectionItem';

const Sections = ({ section }) => {
    
    return (
        <header className="sections">
            <ul className="sections__items">
                <SectionItem 
                    itemName="Photography"
                    link="portfolio"
                />
                <SectionItem 
                    itemName="Filmmaking"
                    link="filmmaking"
                />
                <SectionItem 
                    itemName="Ilustration"
                    link="ilustration"
                />
            </ul>
            <h1 className="sections__title">{section}</h1>
        </header>
    )
};

export default Sections;