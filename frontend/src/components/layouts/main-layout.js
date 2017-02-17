import React from 'react';
import logo from './logo.svg';
import './Home.css';

export default function(props) {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Welcome to React</h2>
			</div>
			<main>
				{props.children}
			</main>
		</div>
	);
}
