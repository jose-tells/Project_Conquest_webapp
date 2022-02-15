import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from "../Containers/Home";
import Portfolio from "../Containers/Portfolio";
import Photography from "../Containers/Photography";
import PhotographyCarousel from "../Containers/PhotographyCarousel";
import Filmmaking from "../Containers/Filmmaking";
import VideoPlayer from "../Containers/VideoPlayer";
import Illustration from "../Containers/Illustration";
import About from "../Containers/About";
import Profile from "../Containers/Profile";
import Contact from "../Containers/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/carousel/:id" component={PhotographyCarousel} />
        <Route exact path="/filmmaking" component={Filmmaking} />
        <Route exact path="/player" component={VideoPlayer} />
        <Route exact path="/illustration" component={Illustration} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:name" component={Profile} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
