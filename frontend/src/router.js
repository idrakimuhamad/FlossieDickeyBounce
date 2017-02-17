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
import About from './components/pages/About';

// Containers
import CustomerListContainer from './containers/customer-list-container';

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/">
				<IndexRoute component={CustomerListContainer}></IndexRoute>
				<Route path="about" component={About} />
			</Route>
		</Route>
	</Router>
);