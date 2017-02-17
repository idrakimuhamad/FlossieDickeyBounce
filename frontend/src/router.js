import React from 'react';
import {
	Router,
	Route,
	browserHistory,
	IndexRoute
} from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/">
				<IndexRoute component={Home}></IndexRoute>
				<Route path="about" component={About} />
			</Route>
		</Route>
	</Router>
);