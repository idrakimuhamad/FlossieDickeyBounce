import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
		<div className="fixed bottom-1 right-1 mw4">
      <a href="#"
        className="db link black"
        title={props.cart.length + ' item added'}>
        <div className="w-100 bg-white br3 ph4 pv2 ba b--black-10 grow">
          <div className="tc">
    				<h5 className="f5">{props.cart.length}</h5>
    			</div>
        </div>
      </a>
		</div>
  );
}
