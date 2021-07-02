import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//COMPONENTS
import MenuNavButton from './MenuNavButton'
import MenuSlide from './MenuSlide'
// Classnames
import classNames from 'classnames';

const MenuNav = props => {

    const { isHome } = props;

    const [open,setOpen] = useState(false)
    //FUNCTION EVENT HANDLECLICK -> IS A PROP -> CHANGE THE STATE OF OPEN FROM FALSE TO TRUE
    const handleClick = ()=>{
        setOpen (!open)
    }

    const LogoStyle = classNames('logo',{
        isHome
    })

    return(
        <nav className="container-menu">
            <Link className={LogoStyle} to ='/'>PROJECT CONQUEST</Link>
            {/* //THE COMPONENTS WITH PROPS (OPEN, HANDLECLICK) */}
            <MenuSlide 
                open={open} 
                handleClick={handleClick}  
            />
            <MenuNavButton 
                open={open} 
                handleClick={handleClick}
            />
        </nav>
    )
};

export default MenuNav;