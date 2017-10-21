import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App.js';

const Routes = (
	<Router>
		<Route path="/" component={App} />
	</Router>
);

export default Routes;
