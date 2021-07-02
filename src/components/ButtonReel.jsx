import React, {useState} from 'react';

const ButtonReel = () =>{
    const [player, setPlayer] = useState(false);

    const handleClick = ()=>{
        setPlayer (!player)
    }
    return (
        <button type="button" className='container-reel' onClick={handleClick}>
            <p>CLICK TO REEL</p> 
            {/* { player ? 'player' : 'no player'} */}
        </button>
    )
}

export default ButtonReel;