import React from 'react';
import { HashRouter, Router, Route } from 'react-router-dom';
import App from './App.js';
import MainContent from './components/MainContent/MainContent';

const Routes = (
    <HashRouter>
        <Route exact path="/" component={App} />
    </HashRouter>
);

export default Routes;
