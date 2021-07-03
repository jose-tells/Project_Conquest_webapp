import React, { useEffect, useRef, useState } from 'react'

const phrases = [
    {
        id: 0,
        word: "Crazy"
    },
    {
        id: 1,
        word: "Gorgeus"
    },
    {
        id: 2,
        word: "Outstanding"
    },
    {
        id: 3,
        word: "Wonder"
    },

]

const SliderTitle = () =>{

    const [id, setId] = useState(0);
    const timeOutRef = useRef(null);

    const resetTimeOut = () =>{
        if(timeOutRef.current){
            clearTimeout(timeOutRef.current)
        }
    };

    useEffect(() => {
        resetTimeOut();

        timeOutRef.current = setTimeout(() => {
            setId((prevId) => 
                prevId === phrases.length - 1 ? 0 : prevId + 1
            )}, 
            3500)

        return () => {
            resetTimeOut();
        };

    }, [id])


    return(
        <div className="slider">
            <h1 className="slider__text">Want to make real your</h1>
            <div 
                className="slider__container"
            >
                    {phrases.map((word)=>(
                        <h1
                            key = {word.id}
                            className="slider__animation"
                            style={{transform:`translate(${-id * 100}%, 0)`}}
                        >
                            {word.word}
                        </h1>
                        
                    ))}
            </div>
            <h1 className="slider__text">idea?</h1>
        </div>
    )
}; 

export default SliderTitle;