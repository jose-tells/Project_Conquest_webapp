import React from "react";
// Styles
import "../assets/styles/components/LinkCard.styl";

const LinkCard = ({ cardTitle, children, renderImagesReel, media }) => {
  const [position, setPosition] = React.useState(0);

  const cardImagesContainerStyles = () => ({
    transform: `translateX(${-position * 100}%)`,
  });

  React.useEffect(() => {
    const animation = setInterval(() => {
      setPosition((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(animation);
  }, [position]);

  return (
    <div className="linkCard__container">
      <div className="linkCard__section--container">
        <div className="linkCard__images--glass" />
        <div
          className="linkCard__images--container"
          style={cardImagesContainerStyles()}
        >
          {media.map(renderImagesReel)}
        </div>
        <h1 className="linkCard__title">{cardTitle}</h1>
      </div>
      {children}
    </div>
  );
};

export default LinkCard;
