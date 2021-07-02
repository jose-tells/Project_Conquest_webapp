import React from 'react'
import { Link } from 'react-router-dom';

const SeeMoreButton = () => {
    return (
        <Link to="/photography" className="grid__link" >
            See More
        </Link>
    )
};

export default SeeMoreButton;