import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//COMPONENTS
import MenuNavButton from './MenuNavButton'
import MenuSlide from './MenuSlide'
//STYLES
// import './styles/components/menuNav.css'

const MenuNav = () => {
    //HOOK
    const [open,setOpen] = useState(false)
    //FUNCTION EVENT HANDLECLICK -> IS A PROP -> CHANGE THE STATE OF OPEN FROM FALSE TO TRUE
    const handleClick = ()=>{
        setOpen (!open)
    }

    return(
        <nav className="container-menu">
            <Link to ='/'>PROJECT CONQUEST</Link>
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