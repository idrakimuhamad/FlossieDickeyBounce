import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
	const bg = props.bgColorClass ? props.bgColorClass : 'bg-black';
	const color = props.colorClass ? props.colorClass : 'white';
	const borderRadius = props.radius ? 'br' + props.radius : 'br0';
	const className = props.className ? props.className : '';
	
  return (
		<Link
			to={props.href}
			className={'f6 link dim ph3 pv2 mb2 dib ' + borderRadius + ' ' + bg + ' ' + color + ' ' + className }
			title={props.title}>
			{props.text}
		</Link>
  );
}
