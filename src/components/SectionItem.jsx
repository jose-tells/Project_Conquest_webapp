import React from 'react'
import { Link } from 'react-router-dom'
// Classnames
import classnames from 'classnames';

const SectionItem = props => {

    const { isSelected, itemName, link } = props;

    const SectionStyles = classnames('link', {
        isSelected
    })

    return (
        <li>
            <Link to={`/${link}` } className={SectionStyles}>{itemName}</Link>
        </li>
    )
};

export default SectionItem;