import React from 'react';
import Header from '../views/app-header';

export default function(props) {
	return (
		<div className="app">
			<Header />
			<main>
				{props.children}
			</main>
		</div>
	);
}
