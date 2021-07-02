import React from 'react'

const VideoDescription = ({description, title, caption, autor}) => {
    return (
        <div className={description}>
            <h2 className="description--title">{title}</h2>
            <p className="description--caption">{caption}</p>
            <p className="description--author">{autor}</p>
        </div>
    )
};

export default VideoDescription;