import React from 'react'
// Components
import GridFormat from './GridFormat'
// Images
import Photo1 from '../assets/static/img/Maris V.jpg'
import Photo2 from '../assets/static/img/Lujuria H.jpg'
import Photo3 from '../assets/static/img/Danger-José H.jpg'
import Photo4 from '../assets/static/img/Mayela V.jpg'
import Photo5 from '../assets/static/img/Frame-hermanos H.jpg'


const GridPortf = () => {
    return (
        <section className="grid">
            <GridFormat
                gridNumber="one"
                media={Photo1}
            />
            <GridFormat
                gridNumber="two"
                media={Photo2}
            />
            <GridFormat
                gridNumber="three"
                media={Photo3}
            />
            <GridFormat
                gridNumber="four"
                media={Photo4}
            />
            <GridFormat
                gridNumber="five"
                media={Photo5}
            />
        </section>
    )
};

export default GridPortf;