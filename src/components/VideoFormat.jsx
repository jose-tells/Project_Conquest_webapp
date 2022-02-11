import React from 'react'
import { Link } from 'react-router-dom';


const VideoFormat = ({styles, source}) => {
    return(
        <Link to="/player" className={styles}>
            <video autoPlay muted loop >
                <source src={source} type="video/mp4"/>
            </video>
        </Link>
    )
};

export default VideoFormat