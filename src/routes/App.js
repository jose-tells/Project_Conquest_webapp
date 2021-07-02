import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//Components
import Home from '../Containers/Home'
import Hub from '../Containers/Hub';
import Portfolio from '../Containers/Portfolio';
import Filmmaking from '../Containers/Filmmaking';
import Ilustration from '../Containers/Ilustration';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hub" component={Hub}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/filmmaking" component={Filmmaking}/>
            <Route exact path="/ilustration" component={Ilustration}/>
        </Switch>
    </BrowserRouter>
);

export default App;