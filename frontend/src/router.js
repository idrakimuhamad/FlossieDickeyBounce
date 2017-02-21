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
import Browse from './components/pages/Browse';
import Checkout from './components/pages/Checkout';

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
			<Route path="/">
				<IndexRoute component={Home}></IndexRoute>
				<Route path="browse" component={Browse} />
				<Route path="checkout" component={Checkout} />
			</Route>
		</Route>
	</Router>
);
