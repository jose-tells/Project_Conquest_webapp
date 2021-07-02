import React from 'react'
import GridFormat from '../components/GridFormat'

export default function GridPhotos({ ForLoop }) {

    return (
        <section className="gridPhotos">
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
}