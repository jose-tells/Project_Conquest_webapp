import React from 'react'

const SocialsText = ({socials, socialLink}) => {
    return(
        <a href={socialLink} className="gridContact__socialMedia--socials">{socials}</a>
    )
};

export default SocialsText;