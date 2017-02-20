import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
		<div className="dtc-ns pa2">
      <a href="#"
        className="db link black"
        onClick={props.addToCart(props.ad.id)}>
        <div className="w-100 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
          <div className="tc">
    				<h5 className="f5">{props.ad.name}</h5>
    				<hr className="mw3 bb bw1 b--black-10"/>
    			</div>
  				<h2 className="f3 f2-l tc center black-70">${props.ad.price}</h2>
        </div>
      </a>
		</div>
  );
}
