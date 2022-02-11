import React, { useEffect } from 'react'
//React-hook-inview (observer)
import { useInView } from 'react-hook-inview';

const CarouselFormat = props => {

    const {media, formatStyle, id, setId } = props;

    const [ref, isVisible] = useInView({
        threshold: 0.5
    });

    useEffect(()=> {
        if (isVisible) { 
            setId(id)
        }                      
    }, [isVisible])


    return(
        <div className={formatStyle} ref={ref} >
            <img src={media} alt="" />
        </div>
    )
};

export default CarouselFormat