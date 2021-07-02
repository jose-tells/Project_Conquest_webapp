import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//Components
import Home from '../Containers/Home'
import Hub from '../Containers/Hub';
import Portfolio from '../Containers/Portfolio';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hub" component={Hub}/>
            <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
    </BrowserRouter>
);

export default App;