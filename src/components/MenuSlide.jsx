import React from 'react';
import { Link } from 'react-router-dom';
//MenuData
import { MenuItems } from '../../MenuItems';
// classnames
import classNames from 'classnames';

const MenuSlide = props => {
    
    const {open, handleClick, isLight} = props;
    
    //Conditioned style using props
    const styleTop = ()=>{
        return{
            top: open ? "0" : "-100%"
        }
    }

    const StylesMenuSlide = classNames('container-menu-bar', {
        isLight: isLight,
    })

    return (
        //Container of the menu with conditioned style 
        <div className={StylesMenuSlide} open ={open} style={styleTop()}>
        {/* Button to make close the Menu  */}
            <div className='menu-close-button' onClick={handleClick}>X</div>
            <ul>
                {
                    // Map of the MenuItems
                    MenuItems.map((items, id)=>{
                        return(
                            <li key={id}>
                                <Link className={items.className} to={items.url}>
                                    {items.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default MenuSlide;
