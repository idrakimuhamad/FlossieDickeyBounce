import React from 'react';

export default function(props) {
	return (
		<div className="App">
			<div>
				<h3>The main layout</h3>
				<main>
					{props.children}
				</main>
			</div>
		</div>
	);
}
