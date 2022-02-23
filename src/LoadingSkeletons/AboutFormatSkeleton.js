import React from "react";

export const AboutFormatSkeleton = () => {
  const normalizerStyle = {
    transform: "translateX(0)",
  };

  return (
    <>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
      <div className="gridAbout__item--container">
        <div className="gridAbout__image--container skeleton__container">
          <div className="gridAbout__image skeleton" style={normalizerStyle} />
        </div>
      </div>
    </>
  );
};
