import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/LinkCard.styl";

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

LinkCard.propTypes = {
  cardTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
  renderImagesReel: PropTypes.func,
  media: PropTypes.array,
};

LinkCard.defaultProps = {
  cardTitle: "Photography",
  renderImagesReel: () => {},
  media: [],
};

export default LinkCard;
