import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LinkCardSkeleton = () => (
  <div className="linkCard__container">
    <div className="linkCard__section--container skeleton__container">
      <div className="linkCard__images--container skeleton" />
    </div>
    <div className="RedirectLink__container">
      <h1 className="RedirectLink__text disabled">
        See More
        <FontAwesomeIcon
          icon={faArrowRight}
          className="RedirectLink__icon disabled"
        />
      </h1>
      <div className="RedirectLink__underline disabled" />
    </div>
  </div>
);
