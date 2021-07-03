import React from 'react'
//Styles
import '../assets/styles/IndexImports.styl'
// Components
import MenuNav from '../components/MenuNav';
import Title from '../components/Title';
import SocialMedia from '../components/SocialMedia';
import ButtonReel from '../components/ButtonReel';
import ButtonContact from '../components/ButtonContact';
// Video Reel
import VideoReel from '../assets/static/videos/bucle-portada.mp4'

const Home = () => {
    return (
        <>
            <video className="reel" autoPlay loop>
                <source src={VideoReel}/>
            </video>
            <MenuNav 
                isDark
                isLight 
            />
            <main className="wrap_container">
                <ButtonReel />
                <Title />
                <SocialMedia />
                <ButtonContact />
            </main>
        </> 
    )
};

export default Home;