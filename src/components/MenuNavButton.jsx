import React from 'react'
//STYLES
// import './styles/components/menuNavButton.css'

const MenuNavButton = ({open, handleClick}) => {
        return !open ? (
            <button className='menu-button' onClick={handleClick}>
                    Menu
            </button>
        ):(             
            <button className='menu-button'>
                Menu
            </button>
        );
    };                                                                                                                                                                                                                                         function MenunavButton({open, handleClick}) {
};

export default MenuNavButton;
