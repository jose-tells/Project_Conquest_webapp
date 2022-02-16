import React from "react";
// Styles
import "../assets/styles/components/SliderTitle.styl";

const SliderTitle = () => {
  const [id, setId] = React.useState(0);
  const timeOutRef = React.useRef(null);

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(() => {
      setId((prevId) => (prevId === phrases.length - 1 ? 0 : prevId + 1));
    }, 3500);

    return () => {
      resetTimeOut();
    };
  }, [id]);

  return (
    <div className="slider">
      <h1 className="slider__text">Want to make real your</h1>
      <div className="slider__container">
        {phrases.map((word) => (
          <h1
            key={word}
            className="slider__animation"
            style={{ transform: `translate(${-id * 100}%, 0)` }}
          >
            {word}
          </h1>
        ))}
      </div>
      <h1 className="slider__text">idea?</h1>
    </div>
  );
};
const phrases = ["Crazy", "Gorgeous", "Outstanding", "Wonder"];

export default SliderTitle;
