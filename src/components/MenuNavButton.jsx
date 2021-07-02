import React from 'react'

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
