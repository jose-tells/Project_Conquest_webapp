import React from 'react'

const HeaderReel = ({goBack, itemId}) => {

    return(
        <header className="sliderReel__header">
            <h1 className="sliderReel__header--number">{itemId}/20</h1>
            <div className="sliderReel__header--buttons">
                <button>
                </button>
                <button onClick={goBack}>
                X
                </button>
            </div>
        </header>
    )
};

export default HeaderReel;