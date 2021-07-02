import React from 'react'

const GridFormat = ({gridNumber, media, Clicked}) => {
    return (
        <div className={gridNumber} onClick={Clicked}>
            <img src={media} alt="" />
        </div>
    )
};

export default GridFormat;