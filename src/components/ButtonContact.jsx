import React from 'react';
import { Link } from 'react-router-dom';

const ButtonContact = () => {
    return(
        <div className='conatiner-contactButton'>
            <Link to="/contact">CONTACT US!</Link>
        </div>
    )
}
export default ButtonContact