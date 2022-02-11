import React  from 'react'
//Components
import CarouselFormat from './CarouselFormat'

const SliderCarousel = ({ media, setId }) => {

    return(
        <section className="sliderReel__slider">
            {
                    <CarouselFormat 
                        key = {media.id}
                        setId = {setId}
                        formatStyle = "sliderReel__photo"
                        {...media}
                    />
            }
        </section>
    )
};

export default SliderCarousel;