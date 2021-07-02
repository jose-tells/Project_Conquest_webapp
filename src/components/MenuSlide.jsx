import React from 'react';
import { Link } from 'react-router-dom';
//MENU DATA
import { MenuItems } from '../../MenuItems';

const MenuSlide = ({open, handleClick}) => {
    //CONDICIONED STYLE USING PROPS (OPEN)
    const styleTop = ()=>{
        return{
            top: open ? "0" : "-100%"
        }
    }

    return (
        //CONTEINER OF MENU WITH CONDICIONED STYLE
        <div className='container-menu-bar' open ={open} style={styleTop()}>
        {/*BUTTON TO MAKE CLOSE THE MENU*/}
            <div className='menu-close-button'>
                <div onClick={handleClick}></div>
            </div>
            <ul>
                {
                    //MAP OF MENUITEMS
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
