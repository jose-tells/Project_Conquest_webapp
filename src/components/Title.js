import React from "react";
import ButtonContact from "./ButtonContact";
import SocialMedia from "./SocialMedia";
// Styles
import "@styles/components/Title.styl";

const Title = () => {
  const [id, setId] = React.useState(0);
  const timeOutRef = React.useRef(null);
  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };
  React.useEffect(() => {
    resetTimeOut();
    timeOutRef.current = setTimeout(
      () => setId((prevId) => (prevId === phrases.length - 1 ? 0 : prevId + 1)),
      delay
    );
    return () => {
      resetTimeOut();
    };
  }, [id]);

  return (
    <div className="title__container">
      <h1 className="title__text">We are</h1>
      <div className="title__slideshow--container">
        {phrases.map((phrase) => (
          <h2
            key={phrase}
            className="text__slideshow"
            style={{ transform: `translate3d(${-id * 100.5}%,0,0)` }}
          >
            {phrase}
          </h2>
        ))}
      </div>
      <ButtonContact />
      <SocialMedia
        instagram="https://www.instagram.com/projectconquestt/"
        youtube="https://www.youtube.com/channel/UCipdJHJR0MaQhHu1YrGP3Ag"
        // discord="https://discord.gg/uvc9JyWzJ7"
      />
    </div>
  );
};

const phrases = ["Project Conquest", "Creativity", "Madness", "Art"];
const delay = 3500;

export default Title;
