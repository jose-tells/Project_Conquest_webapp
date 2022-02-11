import React from 'react'

const VideoDescription = props => {

    const {descriptionStyles, title, caption, autor} = props;

    return (
        <div className={descriptionStyles}>
            <h2 className="description--title">{title}</h2>
            <p className="description--caption">{caption}</p>
            <p className="description--author">{autor}</p>
        </div>
    )
};

export default VideoDescription;