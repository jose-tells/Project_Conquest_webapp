import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Home from "@containers/Home";
import Portfolio from "@containers/Portfolio";
import Photography from "@containers/Photography";
import Filmmaking from "@containers/Filmmaking";
import Illustration from "@containers/Illustration";
import About from "@containers/About";
import Profile from "@containers/Profile";
import Contact from "@containers/Contact";
import NotFound from "@containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/filmmaking" component={Filmmaking} />
        <Route exact path="/illustration" component={Illustration} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about/:name" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
