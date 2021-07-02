import React, { useState } from 'react'  
import AboutFormat from './AboutFormat'

const GridAbout = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return(
        <main className="gridAbout">
            <AboutFormat
                open = {open}
                handleClick = {handleClick}
                specialty="VFX"
            />
            <AboutFormat 
                specialty="Filmmaking"
                specialty2="Photography"
            />
            <AboutFormat 
                specialty="Illustration"
            />
            <h1 className="gridAbout__title">The Crazy Minds</h1>
            <div className="gridAbout__animation"></div>
            <div className="gridAbout__animation"></div>
            <div className="gridAbout__animation"></div>
        </main>
    )
};

export default GridAbout;