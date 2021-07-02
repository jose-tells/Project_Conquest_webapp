import React from 'react'
import GridFormat from '../components/GridFormat'

const GridPhotos = ({ ForLoop, Grid }) => {

    return (
        <section className={Grid}>
            {
                ForLoop.map((item)=> (
                    <GridFormat 
                        key = {item.id} 
                        gridNumber = {item.name}
                        media = {item.media}
                    />
                ))
            }
        </section>
    )
};

export default GridPhotos;