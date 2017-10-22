import React from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import MainContent from './components/MainContent/MainContent';

const Routes = (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/:page" component={App} />
        </Switch>
    </HashRouter>
);

export default Routes;
