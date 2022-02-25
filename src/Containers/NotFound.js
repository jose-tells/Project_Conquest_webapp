import React from "react";
import { Link } from "react-router-dom";
// Assets
import LostPerson from "../assets/img/lostPerson.jpg";
import "@styles/NotFound.styl";

const NotFound = () => (
  <main className="NotFound__container">
    <header className="NotFound__message--header">
      <div className="NotFound__error--container">
        <h1 className="NotFound__error">404</h1>
        <div className="NotFound__error--underline" />
      </div>
      <p className="NotFound__message">
        Oh no! It seems you are a bit lost pal :(
      </p>
      <button type="button" className="NotFound__redirectButton--container">
        <Link to="/" className="NotFound__redirectButton">
          Let's Go Home!
        </Link>
      </button>
    </header>
    <div className="NotFound__image--container">
      <img className="NotFound__image" src={LostPerson} alt="Lost" />
      <p className="NotFound__image--credits">
        Photo by{" "}
        <a href="https://unsplash.com/@averieclaire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText/">
          averie woodard
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  </main>
);

export default NotFound;
