import React from 'react'


const VideoFormat = ({name, Video}) => {
    return(
        <div className={name}>
            <video autoPlay muted loop controls={false}>
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
};

export default VideoFormat